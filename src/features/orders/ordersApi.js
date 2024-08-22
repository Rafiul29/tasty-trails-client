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

    UpdateOrdersStatus: builder.mutation({
      query: ({id,data}) => ({
        url: `orders/list/${id}`,
        method: "PUT",
        body: data,
      }),
    }),

    OrderItems: builder.mutation({
      query: (id) => `/orders/items/`,
    }),

  }),
});

export const {
  useAddOrderMutation,
  useGetAllOrdersQuery,
  useGetUserOrdersQuery,
  useUpdateOrdersStatusMutation
} = ordersApi;
