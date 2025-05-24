import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: { cart: [] },
  reducers: {
    addToCart: (state, action) => {
      console.log("Added to cart:", action.payload);
      const existing = state.cart.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += action.payload.quantity || 1; // supports quantity from payload
      } else {
        state.cart.push({ ...action.payload, quantity: action.payload.quantity || 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.cart.find(i => i.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(i => i.id === action.payload);
      if (itemIndex !== -1) {
        const item = state.cart[itemIndex];
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.cart.splice(itemIndex, 1);
        }
      }
    }
  }
});

export const { addToCart, increaseQuantity, decreaseQuantity } = productSlice.actions;
export default productSlice.reducer;
