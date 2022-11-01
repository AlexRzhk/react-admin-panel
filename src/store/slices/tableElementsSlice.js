import { createSlice } from "@reduxjs/toolkit";
import { clients } from "./data";

export const STATES = {
  NEW: "Новый",
  CALCULATION: "Рассчет",
  COMPLETED: "Выполнен",
  CANCELED: "Отменен",
  POSTPONED: "Отложен",
  CONFIRMED: "Подтвержден",
};

const initialState = {
  clients: clients,
};

export const filterVisibilitySlice = createSlice({
  name: "tableElements",
  initialState,
  reducers: {
    updateRecord: (state, action) => {
      let { id, status, positionCount, sum, fullName } = action.payload;
      for (let record in state.clients) {
        if (record.id === id) {
          record.status = STATES[status];
          record.positionCount = positionCount;
          record.sum = sum;
          record.fullName = fullName;
        }
      }
    },
  },
});

export const { changeFilterVisibility } = filterVisibilitySlice.actions;

export default filterVisibilitySlice.reducer;
