import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
console.log(import.meta.env.VITE_APP_API_URL,'api')
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_API_URL,  // Corrected here
    // prepareHeaders: async (headers, { getState, endpoint }) => {
    //   const token = getState()?.auth?.token;
    //   if (token) {
    //     headers.set("Authorization", `Token ${token}`);
    //   }
    //   return headers;
    // }
   
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});
