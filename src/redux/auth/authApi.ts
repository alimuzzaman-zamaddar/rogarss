/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "@/redux/store";
import { setCredentials } from "../slices/authSlice";

export type RegisterPayload = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  agree_to_terms: 1 | 0;
};

export type LoginPayload = { email: string; password: string };

export type SendOtpPayload = { email: string }; // /users/login/email-verify
export type ResendOtpPayload = { email: string }; // /users/login/otp-resend
export type ResetPasswordPayload = {
  // /users/login/reset-password
  email: string;
  password: string;
  password_confirmation: string;
};

export type AuthResponse = any;
export type ApiResponse = any;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SITE_URL,
    prepareHeaders: (headers, { getState }) => {
      headers.set("Accept", "application/json");
      const token = (getState() as RootState).auth.token;
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // REGISTER (kept from your previous code)
    register: builder.mutation<AuthResponse, RegisterPayload>({
      query: (payload) => {
        const fd = new FormData();
        fd.append("name", payload.name);
        fd.append("email", payload.email);
        fd.append("password", payload.password);
        fd.append("password_confirmation", payload.password_confirmation);
        fd.append("agree_to_terms", String(payload.agree_to_terms));
        return { url: "/users/register", method: "POST", body: fd };
      },
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const token = data?.token ?? data?.data?.token ?? null;
          const user = data?.user ?? data?.data?.user ?? null;
          if (token && user) dispatch(setCredentials({ token, user }));
        } catch {}
      },
    }),

    login: builder.mutation<AuthResponse, LoginPayload>({
      query: (payload) => {
        const fd = new FormData();
        fd.append("email", payload.email);
        fd.append("password", payload.password);
        return { url: "/users/login", method: "POST", body: fd };
      },
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          // Your response shape:
          // { success, message, data: { id, name, email, role, avatar, token }, code }
          const payload = data?.data;
          const token = payload?.token ?? null;

          // Build a user object that matches your AuthState.User
          const user = payload
            ? {
                id: payload.id,
                name: payload.name,
                email: payload.email,
                is_premium: false, // not provided by API; keep default
                avatar: payload.avatar ?? null,
                agree_to_terms: true, // not provided by API; adjust if needed
                // (optional) role is not in your User interface—store separately in localStorage
              }
            : null;

          if (token && user) {
            // put into Redux
            dispatch(setCredentials({ token, user }));

            // persist to localStorage for your requirement:
            // token, email, role, and a full user snapshot
            if (typeof window !== "undefined") {
              localStorage.setItem("token", token);
              localStorage.setItem("email", payload.email ?? "");
              localStorage.setItem("role", payload.role ?? "");
              localStorage.setItem("user", JSON.stringify(payload)); // full object with role & id etc.
            }
          }
        } catch {
          // swallow; component will handle errors via unwrap()
        }
      },
    }),

    // --- NEW: SEND OTP ---
    sendOtp: builder.mutation<ApiResponse, SendOtpPayload>({
      query: ({ email }) => {
        const fd = new FormData();
        fd.append("email", email);
        return { url: "/users/login/email-verify", method: "POST", body: fd };
      },
    }),

    // --- NEW: RESEND OTP ---
    resendOtp: builder.mutation<ApiResponse, ResendOtpPayload>({
      query: ({ email }) => {
        const fd = new FormData();
        fd.append("email", email);
        return { url: "/users/login/otp-resend", method: "POST", body: fd };
      },
    }),

    // --- NEW: RESET PASSWORD ---
    resetPassword: builder.mutation<ApiResponse, ResetPasswordPayload>({
      query: ({ email, password, password_confirmation }) => {
        const fd = new FormData();
        fd.append("email", email);
        fd.append("password", password);
        fd.append("password_confirmation", password_confirmation);
        return { url: "/users/login/reset-password", method: "POST", body: fd };
      },
    }),

    // ME (optional)
    me: builder.query<any, void>({
      query: () => ({ url: "/me", method: "GET" }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useSendOtpMutation,
  useResendOtpMutation,
  useResetPasswordMutation,
  useMeQuery,
} = authApi;
