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
    })
  }),
});

export const {useGetUserProfileQuery,useDepositBalanceMutation  } = userApi;
