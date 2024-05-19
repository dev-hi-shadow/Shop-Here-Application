import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../fetchBaseQuery";

export const product = createApi({
  baseQuery,
  reducerPath: "product",
  endpoints: (builder) => ({
    GetProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
    GetProduct: builder.query({
      query: ({ id, type }) => {
         return {
          url: `/products/${id}?type=${type}`,
          method: "GET",
        };  
      },
    }),
    CreateProduct: builder.mutation({
      query: (data) => ({
        url: "/products/create",
        method: "POST",
        body: data,
      }),
    }),
    UpdateProduct: builder.mutation({
      query: (data) => ({
        url: `/products/update/${data.id}`,
        method: "PUT",
        body: { ...data, id: undefined },
      }),
    }),
    DeleteProduct: builder.mutation({
      query: (data) => ({
        url: `/products/delete/${data.id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = product;
