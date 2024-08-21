
import { apiSlice } from "../api/apiSlice";

export const cartsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // Get the user's favourite menu items
    getUserCartItem: builder.query({
      query: (id) => ({
        url: `/carts/list/?user_id=${id}`
      }),
    }),

    // Get the user's favourite menu items
    addToCartItem: builder.mutation({
      query: (data) => ({
        url: `/carts/list/`,
        method: "POST",
        body: data,
      }),
    }),

    // Add a menu item to the favourites
    updateCartItem: builder.mutation({
      query: (data) => ({
        url: ``,
        method: "PUT",
        body: data,
      }),
    }),

    // Delete a favourite menu item
    deleteFavourite: builder.mutation({
      query: (id) => ({
        url: ``,
        method: "DELETE",
      }),
    }),
  }),
});

export const {useGetUserCartItemQuery,useAddToCartItemMutation} = cartsApi;
