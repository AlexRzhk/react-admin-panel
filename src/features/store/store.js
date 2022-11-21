import orders from "./Orders/OrdersSlice";
import filters from "./Filters/FiltersSlice";

const { combineReducers } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
  filters,
  orders,
});

export default rootReducer;
