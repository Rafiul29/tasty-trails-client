import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    tagTypes: ["Deposits", "Deposit"],

    getUserProfile: builder.query({
      query: (id) => `/users/${id}/`,
    }),

    depositBalance: builder.mutation({
      query: (data) => ({
        url: `/user-bank-accounts/deposit/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "Deposits",
        { type: "Menu", id: arg.id },
      ],
    }),

    getBalance: builder.query({
      query: (id) => `/user-bank-accounts/?user_id=${id}`,
      keepUnusedDataFor: 600,
      providesTags: (result, error, id) =>
        result
          ? [...result.map(({ id }) => ({ type: "Deposit", id })), "Deposits"]
          : ["Deposits"],
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  useDepositBalanceMutation,
  useGetBalanceQuery,
} = userApi;
