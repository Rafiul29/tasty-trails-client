import { apiSlice } from "../api/apiSlice";

export const reviewsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // tagTypes: ["Reviews", "Review"],

    getMenuReviews: builder.query({
      query: (id) => `/menu/reviews/?menu_item=${id}`,
      keepUnusedDataFor: 600,
      // providesTags: (result, error, id) =>
      //   result
      //     ? [...result.map(({ id }) => ({ type: "Review", id })), "Reviews"]
      //     : ["Reviews"],
    }),

    addReview: builder.mutation({
      query: (data) => ({
        url: "/menu/reviews/",
        method: "POST",
        body: data,
      }),
      // invalidatesTags: (result, error, arg) => [
      //   "Reviews",
      //   { type: "Reviews", id: arg.id },
      // ],
    }),
  }),
});

export const {useAddReviewMutation,useGetMenuReviewsQuery} = reviewsApi;
