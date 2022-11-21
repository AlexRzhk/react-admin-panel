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
    changeOrders(state, action) {
      const newOrders = state.allOrders.map((order) =>
        action.payload.checkedOrders.includes(order.id)
          ? { ...order, status: action.payload.newStatus }
          : order
      );
      return { ...state, allOrders: newOrders };
    },
    deleteOrders(state, action) {
      const newOrders = state.allOrders.filter(
        (order) => !action.payload.includes(order.id)
      );
      return { ...state, allOrders: newOrders };
    },
  },
});

export const { getOrders, changeOrders, deleteOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
