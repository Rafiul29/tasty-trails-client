import { apiSlice } from "../api/apiSlice";

export const statisticsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStatistics: builder.query({
      query: () => `/ourstatistics/`,
    }),
  }),
});

export const {useGetStatisticsQuery} = statisticsApi;
