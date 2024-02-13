import { configureStore } from "@reduxjs/toolkit";

// importera reduers som vi skriver sen
import todoReducer from "./redux/todoSlice.js";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
