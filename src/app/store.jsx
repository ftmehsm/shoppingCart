import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productSlice";
import cartReducer from "../features/cart/cartSlice"
import logger from "redux-logger";

const store = configureStore({
    reducer : {
        products : productReducer,
        cart:cartReducer
    },
    middleware : getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})


  

export default store;
