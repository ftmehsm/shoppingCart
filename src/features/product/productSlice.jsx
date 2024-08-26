import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import api from "/src/services/config.js";



const initialState = {
    products : []
}

const fetchProducts = createAsyncThunk("product/fetchProducts" , ()=> {
   return api.get("/products");
})

const productSlice = createSlice({
    name : "product",
    initialState,
    extraReducers : (builder) => {
        builder.addCase(fetchProducts.fulfilled , (state,action)=>{
            state.products = action.payload
        })
    }
})

export default productSlice.reducer;
export {fetchProducts};