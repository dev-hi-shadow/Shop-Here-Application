import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../fetchBaseQuery";

export const offer = createApi({
  baseQuery,
  reducerPath: "offer",
  endpoints: (builder) => ({
    GetOffers: builder.query({
      query: () => ({
        url: "/offers",
        method: "GET",
      }),
    }),
    GetOffer: builder.query({
      query: ({ id, type }) => {
        return {
          url: `/offers/${id}?type=${type}`,
          method: "GET",
        };
      },
    }),
    CreateOffer: builder.mutation({
      query: (data) => ({
        url: "/offers/create",
        method: "POST",
        body: data,
      }),
    }),
    UpdateOffer: builder.mutation({
      query: (data) => ({
        url: `/offers/update/${data.id}`,
        method: "PUT",
        body: { ...data, id: undefined },
      }),
    }),
    DeleteOffer: builder.mutation({
      query: (data) => ({
        url: `/offers/delete/${data.id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetOffersQuery,
  useGetOfferQuery,
  useCreateOfferMutation,
  useDeleteOfferMutation,
  useUpdateOfferMutation,
} = offer;
