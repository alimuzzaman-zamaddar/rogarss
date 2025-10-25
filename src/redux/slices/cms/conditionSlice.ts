/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const conditionSlice = createApi({
  reducerPath: "conditionSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SITE_URL,
  }),
  endpoints: (builder) => ({
    getConditionTreats: builder.query<any, void>({
      query: () => "/condition-treats",
    }),

    ConditionTreatedDetails: builder.query<any, string>({
      query: (slug) => `/sub-condition-treats/${slug}`,
    }),
  }),
});

export const { useGetConditionTreatsQuery , useConditionTreatedDetailsQuery} = conditionSlice;
