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
  }),
});


export const {useGetAllMenusQuery,useGetMenuItemQuery } = menusApi;
