import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: '',
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
   
  },
});

export const { searchCategory, searchCategoryRemove } = userSlice.actions;
export default userSlice.reducer;
