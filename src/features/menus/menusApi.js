import { apiSlice } from "../api/apiSlice";

export const menusApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getAllMenus: builder.query({
      query: (search='') =>
        `/menu/list/?search=${search}`,
    }),

    getMenuItem: builder.query({
      query: (id) =>
        `/menu/list/${id}/`,
    }),

    addMenuItem: builder.mutation({
      query: (data) =>({
        url:`/menu/list/`,
        method:"POST",
        body:data
      })
    }),
  }),
});


export const {useGetAllMenusQuery,useGetMenuItemQuery,useAddMenuItemMutation } = menusApi;
