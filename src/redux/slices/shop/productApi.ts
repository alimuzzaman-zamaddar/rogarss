/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "@/redux/store";

export type Product = {
  id: number;
  product_name: string;
  image: string; 
  short_description: string;
  long_description: string;
  price: number;
  status: string;
  created_at?: string | null;
  updated_at?: string | null;
};

export type ProductsResponse = {
  success: boolean;
  message: string;
  data: Product[];
  code: number;
};

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SITE_URL,
    prepareHeaders: (headers, { getState }) => {
      headers.set("Accept", "application/json");
      const token = (getState() as RootState).auth?.token;
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    /** GET /product => list */
    getProducts: builder.query<ProductsResponse, void>({
      query: () => ({ url: "/product", method: "GET" }),
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
