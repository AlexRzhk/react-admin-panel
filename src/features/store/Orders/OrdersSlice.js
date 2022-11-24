const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  allOrders: [],
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    getOrders(state, action) {
      return { ...state, allOrders: action.payload };
    },
  },
});

export const { getOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
