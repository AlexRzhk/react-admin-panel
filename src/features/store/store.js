import orders from "./Orders/OrdersSlice";
import filters from "./Filters/FiltersSlice";
import modal from "./Form/FormSlice";

const { combineReducers } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
  filters,
  orders,
  modal,
});

export default rootReducer;
