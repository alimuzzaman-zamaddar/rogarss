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
  }),
});

export const { useGetServiceContentsQuery } = homeApi;
