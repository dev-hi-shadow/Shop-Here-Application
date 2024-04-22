import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseQuery = fetchBaseQuery({
  // baseUrl: import.meta.env.VITE_NODE_SERVER_API,
  baseUrl: "https://jsonplaceholder.typicode.com/comments",
});
export const searchResult = createApi({
  baseQuery,
  reducerPath: "SearchResult",
  endpoints: (builder) => ({
    GetSearchResult: builder.mutation({
      query: (keyword) => ({
        url: `/search/${keyword}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetSearchResultMutation } = searchResult;
