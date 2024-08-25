import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: (id) =>
        `/users/${id}/`,
    })
  }),
});

export const {useGetUserProfileQuery  } = userApi;
