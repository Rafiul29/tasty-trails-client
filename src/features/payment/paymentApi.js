import { apiSlice } from "../api/apiSlice";

export const paymentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPayment: builder.mutation({
      query: (data) => ({
        url: `/payment/create_payment/`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreatePaymentMutation } = paymentApi;
