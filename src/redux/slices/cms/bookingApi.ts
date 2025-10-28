/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "@/redux/store";

/** Shared Types */
export type Category = { id: number; name: string };
export type Treatment = {
  id: number;
  treatment_name: string;
  treatment_description?: string;
  price: string | number;
  duration: number;
};

export type AvailabilityParams = { treatmentId: number; date: string };

export type CheckoutServicePayload = {
  discount_amount: number | null;
  sub_total_amount: number;
  total_amount: number;
  coupon_code: string | null;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  country: string; // e.g., "BD" or "United States"
  phone: string;
  zip_code: string;
  cancel_redirect_url: string;
  success_redirect_url: string;
  services: {
    treatment_id: number;
    availability_id: number;
    time_slot_id: number;
    duration: number;
    details: string; // "12:00 Am - 02:00 Pm" or simply the chosen time text
  }[];
};

export const bookingApi = createApi({
  reducerPath: "bookingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SITE_URL,
    prepareHeaders: (headers, { getState }) => {
      headers.set("Accept", "application/json");
      const token = (getState() as RootState).auth.token;
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["Availability"],
  endpoints: (builder) => ({
    /** Categories */
    getCategories: builder.query<{ data: Category[] } | any, void>({
      query: () => "/categories",
    }),

    /** Treatments */
    getTreatments: builder.query<{ data: Treatment[] }, number>({
      query: (categoryId) => `/treatments?category_id=${categoryId}`,
    }),

    /** Availability for specific treatment & date */
    getAvailability: builder.query<
      {
        data: {
          availability_id: number;
          time_slots: {
            id: number;
            time: string;
            pivot?: {
              availability_id: number;
              time_slot_id: number;
              status: string;
              created_at: string;
              updated_at: string;
            };
          }[];
        };
      },
      AvailabilityParams
    >({
      query: ({ treatmentId, date }) =>
        `/availability-slot/${treatmentId}/${date}`,
      providesTags: (_res, _err, arg) => [
        { type: "Availability", id: `${arg.treatmentId}-${arg.date}` },
      ],
      transformResponse: (resp: any) => {
        if (resp?.data?.time_slots) {
          return {
            data: {
              availability_id: resp.data.id,
              time_slots: resp.data.time_slots,
            },
          };
        }
        if (Array.isArray(resp?.data)) {
          return { data: { availability_id: 0, time_slots: resp.data } };
        }
        return { data: { availability_id: 0, time_slots: [] } };
      },
    }),

    bookService: builder.mutation<
      { success: boolean; message: string; data: string; code?: number },
      any
    >({
      query: (body) => ({
        url: "/checkout-service",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetTreatmentsQuery,
  useGetAvailabilityQuery,
  useBookServiceMutation,
} = bookingApi;
