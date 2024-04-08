import { configureStore } from "@reduxjs/toolkit";
import portReducer from "./portSlice"
export const Store = configureStore({
    reducer:portReducer
})