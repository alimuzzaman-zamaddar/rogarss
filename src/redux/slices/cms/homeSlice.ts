import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { use } from "react";

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

    Testimonials: builder.query<any, void>({
      query: () => "/testimonials",
    }),
    SocialMedia: builder.query<any, void>({
      query: () => "/social-media",
    }),
    SystemSetting: builder.query<any, void>({
      query: () => "/system-settings",
    }),
  }),
});

export const {
  useServiceContentsQuery,
  useHomeContentsQuery,
  useSubServiceDetailsQuery,
  useTestimonialsQuery,
  useSocialMediaQuery,
  useSystemSettingQuery,
} = homeApi;
