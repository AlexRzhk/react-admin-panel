import rootReducer from "./store/store";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: rootReducer,
});

export default store;
