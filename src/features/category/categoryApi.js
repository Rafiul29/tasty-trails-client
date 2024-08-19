import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () =>
        `/category/list/`,
    }),
    getCategory: builder.query({
      query: (id) =>
        `/category/list/${id}/`,
    }),
  }),
});

export const { useGetCategoryQuery,useGetCategoriesQuery } = categoryApi;
