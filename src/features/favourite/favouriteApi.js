import { apiSlice } from "../api/apiSlice";

export const favouriteApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addFavourite: builder.mutation({
      query: (data) => ({
        url: "/menu/favourite/",
        method: "POST",
        body: data,
      }),
    }),
    getUserFavouriteMenu: builder.query({
      query: (id) => `/menu/favourite/?user_id=${id}`,
    }),
  }),
});

export const { useAddFavouriteMutation, useGetUserFavouriteMenuQuery } =
  favouriteApi;
