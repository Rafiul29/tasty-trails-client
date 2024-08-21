import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: '',
};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
   
  },
});

export const { } = favouriteSlice.actions;
export default favouriteSlice.reducer;
