import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sorting: [],
};

const sortingSlice = createSlice({
  name: "sorting",
  initialState,
  reducers: {
    sortFirstDate: (state, { payload }) => {
      state.sorting = payload;
    },
    sortLastDate: (state, { payload }) => {
      state.sorting = payload;
    },
    sortApprovalStatus: (state, { payload }) => {
      state.sorting = payload;
    },
  },
});
export const {sortApprovalStatus, sortFirstDate, sortLastDate}=sortingSlice.actions;
export default sortingSlice.reducer;