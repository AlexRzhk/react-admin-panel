import orders from "./Orders/ordersSlice";
import filters from "./Filters/filtersSlice";
import form from "./Form/formSlice";

import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  filters,
  orders,
  form,
});

export default rootReducer;
