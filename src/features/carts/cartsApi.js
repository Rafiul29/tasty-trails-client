import { apiSlice } from "../api/apiSlice";

export const cartsApi = apiSlice.injectEndpoints({
  tagTypes: ["Orders", "Order"],

  endpoints: (builder) => ({
    getUserCartItem: builder.query({
      query: (id) => ({
        url: `/carts/list/?user_id=${id}`,
      }),
      keepUnusedDataFor: 600,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Order", id })),
              { type: "Orders" },
            ]
          : ["Orders"],
    }),

    addToCartItem: builder.mutation({
      query: (data) => ({
        url: `/carts/list/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Orders"], 
    }),

    updateCartItem: builder.mutation({
      query: ({ id, data }) => ({
        url: `/carts/list/${id}/`,
        method: "PUT",
        body: data,
      }),
     
      invalidatesTags: (result, error, { id }) => [
        { type: "Order", id }, 
        "Orders",
      ],
    }),

    deleteCartItem: builder.mutation({
      query: (id) => ({
        url: `/carts/list/${id}/`,
        method: "DELETE",
      }),
     
      invalidatesTags: (result, error, id) => [
        { type: "Order", id },
        "Orders", 
      ],
    }),

    cartCheckout: builder.query({
      query: () => ({
        url: `/carts/checkout/`,
      }),
      keepUnusedDataFor: 600,
      providesTags: (result) => {
        // Handle case where `result` is not an array
        if (result && Array.isArray(result)) {
          return [
            ...result.map(({ id }) => ({ type: "Order", id })),
            "Orders",
          ];
        } else {
          return ["Orders"]; // Just invalidate the Orders tag if result isn't an array
        }
      }
    }),
  }),
});

export const {
  useGetUserCartItemQuery,
  useAddToCartItemMutation,
  useUpdateCartItemMutation,
  useDeleteCartItemMutation,
  useCartCheckoutQuery,
} = cartsApi;
