import { configureStore } from "@reduxjs/toolkit";
import langReducer from "./langSlice";
import workintechReducer from "./workintechSlice";

export const store = configureStore({
  reducer: {
    lang: langReducer,
    workintech: workintechReducer,
  },
});
