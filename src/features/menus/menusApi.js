import { apiSlice } from "../api/apiSlice";

export const menusApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    tagTypes: ["Menus", "Menu"],

    getAllMenus: builder.query({
      query: (search = "") => `/menu/list/?search=${search}`,
      keepUnusedDataFor: 600,
      providesTags: (result, error, id) =>
        result
          ? [...result.map(({ id }) => ({ type: "Menu", id })), "Menus"]
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
      query: () => `/menu/list/discounted/`,
    }),
  }),
});

export const {
  useGetAllMenusQuery,
  useGetMenuItemQuery,
  useAddMenuItemMutation,
  useDeleteMenuItemMutation,
} = menusApi;
