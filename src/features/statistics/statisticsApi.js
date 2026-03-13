import { apiSlice } from "../api/apiSlice";

export const statisticsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStatistics: builder.query({
      query: () => `/ourstatistics/`,
      keepUnusedDataFor: 3600,
    }),
  }),
});

export const {useGetStatisticsQuery} = statisticsApi;
