import { createSlice } from "@reduxjs/toolkit";
import { sumPrice,sumQuantity } from "../../helpers/helpers";

const initialState = {
  selectedItems: [],
  counts: 0,
  total: 0,
  checkOut: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state,action) => {
      if (!state.selectedItems.find((item) => item.id == action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      state.counts = sumQuantity(state.selectedItems);
      state.total = sumPrice(state.selectedItems);
      state.checkOut = false;
    },
    removeItem: (state,action) => {
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.selectedItems = newSelectedItems;
      state.counts = sumQuantity(newSelectedItems);
      state.total = sumPrice(newSelectedItems);
      state.checkOut = false;
    },
    increase: (state,action) => {
      const indexItem = state.selectedItems.findIndex(
        (item) => item.id == action.payload.id
      );
      state.selectedItems[indexItem].quantity++;
      state.counts = sumQuantity(state.selectedItems);
      state.total = sumPrice(state.selectedItems);
      state.checkOut = false;
    },
    decrease: (state,action) => {
      const indexItem2 = state.selectedItems.findIndex(
        (item) => item.id == action.payload.id
      );
      if (!state.selectedItems[indexItem2].quantity) return;
      state.selectedItems[indexItem2].quantity--;
      state.counts = sumQuantity(state.selectedItems);
      state.total = sumPrice(state.selectedItems);
      state.checkOut = false;
    },
    check_Out : (state) => {
        state.selectedItems = [];
        state.total =0,
        state.counts=0,
        state.checkOut = true;
    }
  },
});

export default cartSlice.reducer;
export const {increase,decrease,check_Out,addItem,removeItem} = cartSlice.actions;
