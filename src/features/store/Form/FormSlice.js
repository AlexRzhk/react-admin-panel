import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: "",

  confirmationCodeValue: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    initialize(state, action) {
      return {
        ...state,

        order: { ...action.payload.order },
      };
    },
    finalize() {
      return { ...initialState };
    },
    changeValue(state, action) {
      if (action.payload.valueName in state.order) {
        return {
          ...state,
          order: {
            ...state.order,
            [action.payload.valueName]: action.payload.newValue,
          },
        };
      }
      return { ...state, [action.payload.valueName]: action.payload.newValue };
    },
  },
});

export const { initialize, finalize, changeValue } = formSlice.actions;
export default formSlice.reducer;
