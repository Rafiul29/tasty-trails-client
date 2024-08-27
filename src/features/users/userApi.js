import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: (id) =>
        `/users/${id}/`,
    }),

    depositBalance:builder.mutation({
      query: (data) => ({
        url: `/user-bank-accounts/deposit/`,
        method: "POST",
        body: data,
      }),
    }),

    getBalance:builder.query({
      query: (id) => `/user-bank-accounts/?user_id=${id}`
    })

  }),
});

export const {useGetUserProfileQuery,useDepositBalanceMutation,useGetBalanceQuery  } = userApi;
