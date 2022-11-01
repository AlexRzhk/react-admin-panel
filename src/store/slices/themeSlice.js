import { createSlice } from "@reduxjs/toolkit";

export const LIGHT_THEME = "light";
export const DARK_THEME = "dark";

const initialState = {
  value: LIGHT_THEME,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      if (state.value === LIGHT_THEME) {
        state.value = DARK_THEME;
      } else {
        state.value = LIGHT_THEME;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
