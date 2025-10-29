/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "@/redux/store";


export type ProductBrief = {
  id: number;
  product_name: string;
  image: string;
  short_description: string;
  long_description: string;
  price: number;
  status: string;
};

export type CartRow = {
  id: number;
  user_id: number;
  product_id: number;
  quantity: number | string;
  created_at: string;
  updated_at: string;
  product: ProductBrief;
};

type ApiEnvelope<T> = {
  success: boolean;
  message: string;
  data: T;
  code: number;
};


const toFormData = (obj: Record<string, any>) => {
  const fd = new FormData();
  Object.entries(obj).forEach(([k, v]) => {
    if (v !== undefined && v !== null) fd.append(k, String(v));
  });
  return fd;
};

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SITE_URL,

    prepareHeaders: (headers, { getState }) => {
      headers.set("Accept", "application/json");
      const token = (getState() as RootState)?.auth?.token;
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    getCarts: builder.query<ApiEnvelope<CartRow[]>, void>({
      query: () => ({ url: "/carts", method: "GET" }),
      providesTags: ["Cart"],
    }),

    addCart: builder.mutation<
      ApiEnvelope<any>,
      { product_id: number; quantity: number }
    >({
      query: (body) => ({
        url: "/add-cart",
        method: "POST",
        body: toFormData(body),
      }),
      invalidatesTags: ["Cart"],
    }),
    updateCart: builder.mutation<
      ApiEnvelope<CartRow>,
      { cart_id: number; quantity: number }
    >({
      query: ({ cart_id, quantity }) => ({
        url: `/update-cart/${cart_id}`,
        method: "POST",
        body: toFormData({ quantity }),
      }),
      invalidatesTags: ["Cart"],
    }),

    deleteCart: builder.mutation<
      ApiEnvelope<[]>,
      { cart_id: number; quantity?: number }
    >({
      query: ({ cart_id, quantity }) => ({
        url: `/delete-cart/${cart_id}`,
        method: "POST",
        body: quantity !== undefined ? toFormData({ quantity }) : undefined,
      }),
      invalidatesTags: ["Cart"],
    }),

    applyCoupon: builder.mutation<
      ApiEnvelope<any>,
      { coupon_code: string; sub_total: number }
    >({
      query: (body) => ({
        url: "/coupon-apply",
        method: "POST",
        body: toFormData(body),
      }),
    }),

    checkout: builder.mutation<
      ApiEnvelope<string>,
      {
        total_amount: number;
        sub_total_amount: number;
        discount_amount: number;
        address1: string;
        address2?: string;
        city: string;
        state: string;
        country: string;
        phone: string;
        success_redirect_url: string;
        cancel_redirect_url: string;
        coupon_code?: string | null;
        zip_code: string;
      }
    >({
      query: (body) => ({
        url: "/product/checkout",
        method: "POST",
        body: toFormData(body),
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useGetCartsQuery,
  useAddCartMutation,
  useUpdateCartMutation,
  useDeleteCartMutation,
  useApplyCouponMutation,
  useCheckoutMutation,
} = cartApi;
