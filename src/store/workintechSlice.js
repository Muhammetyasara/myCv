import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { workintechData } from "../data/workintechData";

export const fetchWorkintech = createAsyncThunk(
  "workintech/fetch",
  async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(workintechData);
      }, 500);
    });
  }
);

const workintechSlice = createSlice({
  name: "workintech",
  initialState: {
    colors: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkintech.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWorkintech.fulfilled, (state, action) => {
        state.status = "success";
        state.colors = action.payload;
      });
  },
});

export default workintechSlice.reducer;
