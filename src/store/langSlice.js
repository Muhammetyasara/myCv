import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "lang",
  initialState: {
    current: "en",
  },
  reducers: {
    toggleLang: (state) => {
      state.current = state.current === "en" ? "tr" : "en";
    },
  },
});

export const { toggleLang } = langSlice.actions;
export default langSlice.reducer;
