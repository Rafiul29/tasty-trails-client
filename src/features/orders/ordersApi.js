import { data } from "autoprefixer";
import { apiSlice } from "../api/apiSlice";

export const ordersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
   
    getAllOrders: builder.query({
      query: () => `/orders/list/`,
    }),

    getUserOrders: builder.query({
      query: (id) => `/orders/list/?user_id=${id}`,
    }),

    addOrder: builder.mutation({
      query: (data) => ({
        url: "orders/list/",
        method: "POST",
        body: data,
      }),
    }),

    updateOrdersStatus: builder.mutation({
      query: ({id,data}) => ({
        url: `orders/list/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    orderItems: builder.query({
      query: (id) => `/orders/items/?order_id=${id}`,
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
