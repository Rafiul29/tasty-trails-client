import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: '',
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
   
  },
});

export const { } = paymentSlice.actions;
export default paymentSlice.reducer;
