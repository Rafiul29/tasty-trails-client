import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: '',
};

const statisticsSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
   
  },
});

export const { } = statisticsSlice.actions;
export default statisticsSlice.reducer;
