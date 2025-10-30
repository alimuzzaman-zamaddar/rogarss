/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "@/redux/store";

export type Pkg = {
  id: number;
  package_name: string;
  package_price: number;
  package_description: string;
};

export type PkgDetails = {
  id: number;
  treatment_id: number;
  package_name: string;
  package_description: string;
  package_price: number;
  package_duration: number;
  package_session: number;
  package_session_details: string;
  status: string;
  created_at: string;
  updated_at: string;
};

type Envelope<T> = {
  success: boolean;
  message: string;
  data: T;
  code: number;
};

const toFormData = (obj: Record<string, any>) => {
  const fd = new FormData();
  Object.entries(obj).forEach(([k, v]) => {
    if (v === undefined || v === null) return;
    if (Array.isArray(v)) {
      v.forEach((val) => fd.append(`${k}[]`, String(val)));
    } else {
      fd.append(k, String(v));
    }
  });
  return fd;
};

export const packageApi = createApi({
  reducerPath: "packageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SITE_URL,
    prepareHeaders: (headers, { getState }) => {
      headers.set("Accept", "application/json");
      const token = (getState() as RootState)?.auth?.token;
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPackages: builder.query<Envelope<Pkg[]>, void>({
      query: () => ({ url: "/packages", method: "GET" }),
    }),
    getPackageDetails: builder.query<Envelope<PkgDetails>, number>({
      query: (id) => ({ url: `/package/${id}/details`, method: "GET" }),
    }),
    checkoutPackage: builder.mutation<
      Envelope<string>,
      {
        package_ids: number[]; 
        sub_total_amount: number;
        discount_amount: number;
        total_amount: number;
        address1: string;
        address2?: string;
        city: string;
        state: string;
        country: string;
        phone: string;
        zip_code: string;
        success_redirect_url: string;
        cancel_redirect_url: string;
      }
    >({
      query: (body) => {
        const { package_ids, ...rest } = body;
        const fd = toFormData({
          ...rest,
          package_id: package_ids, // becomes package_id[]
        });
        return { url: "/checkout-package", method: "POST", body: fd };
      },
    }),
  }),
});

export const {
  useGetPackagesQuery,
  useGetPackageDetailsQuery,
  useCheckoutPackageMutation,
} = packageApi;
