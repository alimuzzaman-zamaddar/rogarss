
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const homeApi = createApi({
  reducerPath: "homeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SITE_URL,
  }),
  endpoints: (builder) => ({
    getServiceContents: builder.query<any, void>({
      query: () => "/services",
    }),

    getHomeContents: builder.query<any, void>({
      query: () => "/cms/home",
    }),

    getSubServiceDetails: builder.query<any, string>({
      query: (slug) => `/sub-service-details/${slug}`,
    }),
  }),
});


export const {
  useGetServiceContentsQuery,
  useGetHomeContentsQuery,
  useGetSubServiceDetailsQuery,
} = homeApi;
