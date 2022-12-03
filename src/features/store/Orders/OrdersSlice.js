const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  allOrders: [],
  checkedOrdersID: [],
  formChangeOrder: {},
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

    toggleOrderCheck(state, action) {
      if (state.checkedOrdersID.includes(action.payload)) {
        return {
          ...state,
          checkedOrdersID: state.checkedOrdersID.filter(
            (id) => id !== action.payload
          ),
        };
      }
      return {
        ...state,
        checkedOrdersID: [...state.checkedOrdersID, action.payload],
      };
    },
    resetCheckedOrders(state) {
      return { ...state, checkedOrdersID: [] };
    },
    checkAllOrdersOnPage(state, action) {
      return { ...state, checkedOrdersID: action.payload };
    },
    changeOrder(state, action) {
      const changingOrder = state.allOrders.find(
        (order) => order.id === action.payload.id
      );
      changingOrder.status = action.payload.status;
      changingOrder.fullName = action.payload.fullName;
    },
    setFormOrder(state, action) {
      return { ...state, formChangeOrder: action.payload.order };
    },
  },
});

export const {
  getOrders,
  changeOrders,
  deleteOrders,
  toggleOrderCheck,
  resetCheckedOrders,
  checkAllOrdersOnPage,
  changeOrder,
} = ordersSlice.actions;
export default ordersSlice.reducer;
