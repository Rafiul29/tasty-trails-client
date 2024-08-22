
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
      query: ({id,data}) => ({
        url: `/carts/list/${id}/`,
        method: "PUT",
        body: data,
      }),
    }),

    // Delete a favourite menu item
    deleteCartItem: builder.mutation({
      query: (id) => ({
        url: `/carts/list/${id}/`,
        method: "DELETE",
      }),
    }),
    cartCheckout: builder.query({
      query: () => ({
        url: `/carts/checkout/`,
      }),
    }),
  }),
});

export const {useGetUserCartItemQuery,useAddToCartItemMutation,useUpdateCartItemMutation,useDeleteCartItemMutation,useCartCheckoutQuery} = cartsApi;
