/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "@/redux/store";
import { setCredentials } from "../slices/authSlice";

// ---- Types
export type RegisterPayload = {
  name: string; // from "fullname"
  email: string;
  password: string;
  password_confirmation: string;
  agree_to_terms: 1 | 0; // API expects 1/0
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type MeResponse = any; // shape depends on your API
export type AuthResponse =
  | { token: string; user: any }
  | { data?: { token?: string; user?: any } }
  | any;

// ---- API
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
    // POST /users/register (form-data)
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

    // (Optional) POST /users/login (json or form-data – adjust to your backend)
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
          const token = data?.token ?? data?.data?.token ?? null;
          const user = data?.user ?? data?.data?.user ?? null;
          if (token && user) dispatch(setCredentials({ token, user }));
        } catch {}
      },
    }),

    // GET /me (or your profile endpoint) – used by AuthChecker
    me: builder.query<MeResponse, void>({
      query: () => ({ url: "/me", method: "GET" }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useMeQuery } = authApi;
