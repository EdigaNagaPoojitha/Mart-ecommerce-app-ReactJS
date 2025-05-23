import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice"
export const Store=configureStore({
    reducer:{products:productReducer}
})