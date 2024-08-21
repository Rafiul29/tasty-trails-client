import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: '',
};

const cartsSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
   
  },
});

export const { } = cartsSlice.actions;
export default cartsSlice.reducer;
