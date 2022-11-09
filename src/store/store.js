import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import filterVisibilityReducer from "./slices/filterVisibilitySlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    filterVisibility: filterVisibilityReducer,
  },
});
