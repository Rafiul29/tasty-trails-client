import { apiSlice } from "../api/apiSlice";

export const menusApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    tagTypes: ["Menus", "Menu"],

    getAllMenus: builder.query({
      query: ({search ="",page=1,page_size=10}) => `/menu/list/?search=${search}&page=${page}&page_size=${page_size}`,
      keepUnusedDataFor: 600,
      providesTags: (result, error, id) =>
        result
          ? [...result.results.map(({ id }) => ({ type: "Menu", id })), "Menus"]
          : ["Menus"],
    }),

    getMenuItem: builder.query({
      query: (id) => `/menu/list/${id}/`,
    }),

    addMenuItem: builder.mutation({
      query: (data) => ({
        url: `/menu/list/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "Menus",
        { type: "Menu", id: arg.id },
      ],
    }),

    deleteMenuItem: builder.mutation({
      query: (id) => ({
        url: `/menu/list/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [
        "Menus",
        { type: "Menu", id: arg.id },
      ],
    }),

    getAllDiscountedMenus: builder.query({
      query: (page=1) => `/menu/list/discounted/?page=${page}`,
      providesTags: (result, error, id) =>
        result
          ? [...result.results.map(({ id }) => ({ type: "Menu", id })), "Menus"]
          : ["Menus"],
    }),
  }),
});

export const {
  useGetAllMenusQuery,
  useGetMenuItemQuery,
  useAddMenuItemMutation,
  useDeleteMenuItemMutation,
  useGetAllDiscountedMenusQuery
} = menusApi;
