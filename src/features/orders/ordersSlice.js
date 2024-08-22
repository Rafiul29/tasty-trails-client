import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: '',
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
   
  },
});

export const { } = ordersSlice.actions;
export default ordersSlice.reducer;
