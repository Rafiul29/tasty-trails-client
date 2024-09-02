import { apiSlice } from "../api/apiSlice";

export const favouriteApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    tagTypes: ["Favourites", "Favourite"],

    getAllFavouriteMenu: builder.query({
      query: () => `/menu/favourite/`,
      keepUnusedDataFor: 600,
      providesTags: (result, error, id) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Favourite", id })),
              "Favourites",
            ]
          : ["Favourites"],
    }),
    getAllMostFavouriteMenu: builder.query({
      query: ({page=1,page_size=12}) => `/menu/favourite/most_favourite/?page=${page}&page_size=${page_size}`,
      keepUnusedDataFor: 600,
      providesTags: (result, error, id) =>
        result
          ? [
              ...result.results.map(({ id }) => ({ type: "Favourite", id })),
              "Favourites",
            ]
          : ["Favourites"],
    }),


    getUserFavouriteMenu: builder.query({
      query: ({page=1,page_size=8}) => `/menu/favourite/user_favourite/?page=${page}&page_size=${page_size}`,
      keepUnusedDataFor: 600,
      providesTags: (result, error, id) =>
        result
          ? [
              ...result.results.map(({ id }) => ({ type: "Favourite", id })),
              "Favourites",
            ]
          : ["Favourites"],
    }),

    addFavourite: builder.mutation({
      query: (data) => ({
        url: "/menu/favourite/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "Favourites",
        { type: "Favourite", id: arg.id },
      ],
    }),

    deleteFavourite: builder.mutation({
      query: (favId) => ({
        url: `/menu/favourite/${favId}/`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [
        "Favourites",
        { type: "Favourite", id: arg.favId },
      ],
    }),
  }),
});

export const {
  useAddFavouriteMutation,
  useGetUserFavouriteMenuQuery,
  useDeleteFavouriteMutation,
  useGetAllFavouriteMenuQuery,
  useGetAllMostFavouriteMenuQuery
} = favouriteApi;
