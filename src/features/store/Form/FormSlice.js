const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  order: "",

  confirmationCodeValue: "",
};

const formSlice = createSlice({
  name: "modalForm",
  initialState,
  reducers: {
    openModal(state, action) {
      return {
        ...state,

        order: { ...action.payload.order },
      };
    },
    closeModal() {
      return { ...initialState };
    },
    changeModalValue(state, action) {
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

export const { openModal, closeModal, changeModalValue } = formSlice.actions;
export default formSlice.reducer;
