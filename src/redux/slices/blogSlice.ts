/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogSlice = createApi({
  reducerPath: "blogSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SITE_URL,
  }),
  endpoints: (builder) => ({

    getBlogs: builder.query<any, void>({
      query: () => "/blogs",
    }),
    getBlogDetails: builder.query<any, string | number>({
      query: (blog_id) => `/blog-details/${blog_id}`,
    }),
  }),
});

export const { useGetBlogsQuery, useGetBlogDetailsQuery } = blogSlice;
