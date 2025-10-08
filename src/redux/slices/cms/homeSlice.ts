import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const homeApi = createApi({
  reducerPath: "homeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SITE_URL,
  }),
  endpoints: (builder) => ({
    ServiceContents: builder.query<any, void>({
      query: () => "/services",
    }),

    HomeContents: builder.query<any, void>({
      query: () => "/cms/home",
    }),

    SubServiceDetails: builder.query<any, string>({
      query: (slug) => `/sub-service-details/${slug}`,
    }),
  }),
});

export const {
  useServiceContentsQuery,
  useHomeContentsQuery,
  useSubServiceDetailsQuery,
} = homeApi;
