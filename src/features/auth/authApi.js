import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi=apiSlice.injectEndpoints({
  endpoints:(builder)=>({
    // registration 
    register: builder.mutation({
      query: (data) => ({
        url: "/api/auth/register/",
        method: "POST",
        body: data,
      }),
    }),

    // login
    login:builder.mutation({
      query:(data)=>({
        url:"/api/auth/login/",
        method:"POST",
        body:data
      }),
    async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          // update localstorage
          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: result.data.token,
              user: result.data.user,
            })
          );

          dispatch(
            userLoggedIn({
              accessToken: result.data.token,
              user: result.data.user,
            })
          );
          localStorage.removeItem("userEmail");
        } catch (err) {
          //do nothing
        }
      },
    }),
    // logout:builder.query({
    //   query:()=>({
    //     url:"/api/auth/logout/",
    //   }),
    // async onQueryStarted(arg, { queryFulfilled, dispatch }) {
    //     try {
    //       const result = await queryFulfilled;
    //       // update localstorage
    //       localStorage.removeItem("auth");

    //       dispatch(
    //         userLoggedIn({
    //           accessToken: undefined,
    //           user: undefined,
    //         })
    //       );

    //     } catch (err) {
    //       //do nothing
    //     }
    //   },
    // }),
  })  
})



export const {useRegisterMutation,useLoginMutation}=authApi