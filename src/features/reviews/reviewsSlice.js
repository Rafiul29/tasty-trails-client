import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const reviwesSlice = createSlice({
  name: "reviwes",
  initialState,
  reducers: {},
});

export const {} = reviwesSlice.actions;
export default reviwesSlice.reducer;
