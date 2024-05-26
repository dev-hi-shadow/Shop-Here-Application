import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../fetchBaseQuery";

export const cart = createApi({
  baseQuery,
  reducerPath: "cart",
  endpoints: (builder) => ({
    GetCart: builder.query({
      query: () => ({
        url: "/cart",
        method: "GET",
      }),
    }),
    AddToCart: builder.mutation({
      query: (data) => ({
        url: "/cart/create",
        method: "POST",
        body: data,
      }),
    }),
    UpdateCartItem: builder.mutation({
      query: (data) => ({
        url: `/cart/update/${data.id}`,
        method: "PUT",
        body: { ...data, id: undefined },
      }),
    }),
    DeleteFromCart: builder.mutation({
      query: (data) => ({
        url: `/cart/delete/${data.id}`,
        method: "DELETE",
      }),
    }),
    DeleteCarts: builder.mutation({
      query: () => ({
        url: `/cart/delete`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetCartQuery,
  useAddToCartMutation,
  useDeleteFromCartMutation,
  useUpdateCartItemMutation,
} = cart;
