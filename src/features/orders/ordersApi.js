import { apiSlice } from "../api/apiSlice";

export const ordersApi = apiSlice.injectEndpoints({
  tagTypes: ["Orders", "Order", "OrderItems"],  // Define the tag types

  endpoints: (builder) => ({

    getAllOrders: builder.query({
      query: () => `/orders/list/`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Order", id })),
              { type: "Orders" },
            ]
          : ["Orders"],
    }),

    getUserOrders: builder.query({
      query: (id) => `/orders/list/?user_id=${id}`,
      providesTags: (result, error, id) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Order", id })),
              { type: "Orders" },
            ]
          : ["Orders"],
    }),

    addOrder: builder.mutation({
      query: (data) => ({
        url: "orders/list/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Orders"],  // Invalidate the Orders list to trigger a re-fetch
    }),

    updateOrdersStatus: builder.mutation({
      query: ({ id, data }) => ({
        url: `orders/list/${id}/`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Order", id },  // Invalidate the specific order
        "Orders",  // Invalidate the list of orders to trigger a re-fetch
      ],
    }),

    orderItems: builder.query({
      query: (id) => `/orders/items/?order_id=${id}`,
      providesTags: (result, error, id) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "OrderItems", id })),
              { type: "OrderItems", id },
            ]
          : [{ type: "OrderItems", id }],
    }),

  }),
});

export const {
  useAddOrderMutation,
  useGetAllOrdersQuery,
  useGetUserOrdersQuery,
  useUpdateOrdersStatusMutation,
  useOrderItemsQuery,
} = ordersApi;
