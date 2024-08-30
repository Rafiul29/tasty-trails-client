import { apiSlice } from "../api/apiSlice";

export const ordersApi = apiSlice.injectEndpoints({
  tagTypes: ["Orders", "Order", "OrderItems",'OrderItem'],  
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
      invalidatesTags: ["Orders"], 
    }),

    updateOrdersStatus: builder.mutation({
      query: ({ id, data }) => ({
        url: `orders/list/${id}/`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Order", id },  
        "Orders",  
      ],
    }),

    getAllOrdersItems:builder.query({
      query: () => `/orders/items/`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "OrderItem", id })),
              { type: "OrderItems" },
            ]
          : ["OrderItems"],
    }),
    orderItems: builder.query({
      query: (id) => `/orders/items/?order_id=${id}`,
      providesTags: (result, error, id) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "OrderItems", id })),
              { type: "OrderItem", id },
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
