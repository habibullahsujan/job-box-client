import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobInfo: [],
};
const candidateSlice = createSlice({
  name: "candidate",
  initialState,
  reducers: {
    getAddedJobs: (state, { payload }) => {
      state.jobInfo=payload;
    },
  },
});

export const { getAddedJobs } = candidateSlice.actions;

export default candidateSlice.reducer;
