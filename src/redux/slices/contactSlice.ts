/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactSlice = createApi({
  reducerPath: "contactSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SITE_URL,
    prepareHeaders: (headers) => {
      const token =
        typeof window !== "undefined" ? localStorage.getItem("token") : null;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    sendContactForm: builder.mutation<any, FormData>({
      query: (formData) => ({
        url: "/contact-us",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useSendContactFormMutation } = contactSlice;
