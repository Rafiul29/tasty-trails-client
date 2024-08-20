import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: '',
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    searchCategory: (state, action) => {
      state.name = action.payload.name;
      
    },
    searchCategoryRemove: (state) => {
      state.name = '';
    },
  },
});

export const { searchCategory, searchCategoryRemove } = categorySlice.actions;
export default categorySlice.reducer;
