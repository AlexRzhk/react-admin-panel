import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const filterVisibilitySlice = createSlice({
  name: "filterVisibility",
  initialState,
  reducers: {
    changeFilterVisibility: (state) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeFilterVisibility } = filterVisibilitySlice.actions;

export default filterVisibilitySlice.reducer;
