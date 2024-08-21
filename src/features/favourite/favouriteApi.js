import { apiSlice } from "../api/apiSlice";

export const favouriteApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Define tag types
    tagTypes: ["Favourites", "Favourite"],

    // Get the user's favourite menu items
    getUserFavouriteMenu: builder.query({
      query: (id) => `/menu/favourite/?user_id=${id}`,
      keepUnusedDataFor: 600,
      providesTags: (result, error, id) => 
        result
          ? [...result.map(({ id }) => ({ type: "Favourite", id })), "Favourites"]
          : ["Favourites"],
    }),

    // Add a menu item to the favourites
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

    // Delete a favourite menu item
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
} = favouriteApi;
