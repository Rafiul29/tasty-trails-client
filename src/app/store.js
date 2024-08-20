import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import authSliceReducer from "../features/auth/authSlice"
import categorySliceReducer from "../features/category/categorySlice";
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth:authSliceReducer,
    category:categorySliceReducer
  },
  middleware:(getDefaultMiddlewares)=>getDefaultMiddlewares().concat(apiSlice.middleware)
  // devTools:import.meta.env.NODE_ENV!=='production',
  // middleware:(getDefaultMiddlewares)=>getDefaultMiddlewares().concat(apiSlice.middleware)
});