import { apiSlice } from "../api/apiSlice";

export const ordersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
   
    // Get the user's favourite menu items
    getAllOrders: builder.query({
      query: (id) => `/menu/favourite/?user_id=${id}`,
    }),

     // Get the user's favourite menu items
     getUserOrders: builder.query({
      query: (id) => `/menu/favourite/?user_id=${id}`,
    }),
    
    // Add a menu item to the favourites
    addOrder: builder.mutation({
      query: (data) => ({
        url: "orders/list/",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
 useAddOrderMutation
} = ordersApi;
