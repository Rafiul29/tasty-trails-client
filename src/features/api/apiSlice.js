import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
 import { userLoggedOut } from "../auth/authSlice.js";

const baseQuery=fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_API_URL,  // Corrected here
  prepareHeaders: async (headers, { getState, endpoint }) => {
    const token = getState()?.auth?.accessToken

    if (token) {
      headers.set("Authorization", `Token ${token}`);
    }
    return headers;
  }
 
})

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: async(args,api,extraOptions)=>{
    let result=await baseQuery(args,api,extraOptions)
    
    if(result?.error?.status===403){
        api.dispatch(userLoggedOut())
        localStorage.removeItem('auth')
    }
    return result
},
  
  // fetchBaseQuery({
  //   baseUrl: import.meta.env.VITE_APP_API_URL,  // Corrected here
  //   prepareHeaders: async (headers, { getState, endpoint }) => {
  //     const token = getState()?.auth?.accessToken
  //     console.log({token})
  //     if (token) {
  //       headers.set("Authorization", `Token ${token}`);
  //     }
  //     return headers;
  //   }
   
  // }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});
