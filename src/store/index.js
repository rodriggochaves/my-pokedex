import { configureStore } from "@reduxjs/toolkit";

import viewReducer from "./reducers/view";

export default configureStore({
  reducer: {
    view: viewReducer,
  },
});
