import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import authSlice from "../features/auth/authSlice";
import candidateSlice from "../features/Candidate/candidateSlice";
import sortingSlice from "../features/Candidate/sortingSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]:apiSlice.reducer,
    auth: authSlice,
    candidate:candidateSlice,
    sort:sortingSlice,
  },

  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware)
});

export default store;
