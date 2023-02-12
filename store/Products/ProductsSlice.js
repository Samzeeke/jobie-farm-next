import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  carts: [],
  totalAmount: 0,
  totalQuantity: 0,
  changed: false,
};

const ProductsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    addProducts(state, action) {
      state.products = action.payload.products;
    },
    addCartItem(state, action) {
      // Showing notification for added item
      // state.changed = true;
      // setTimeout(() => {
      //   state.changed = false;
      // }, 2000);

      state.totalQuantity++;
      const newItem = action.payload;
      const existingItem = state.carts.find((item) => item.id === newItem.id);
      const updatedAmount = +state.totalAmount + +newItem.price;
      state.totalAmount = updatedAmount.toFixed(2);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.carts.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
          image: newItem.image,
        });
      }
    },
    removeCartItem(state, action) {
      const { id } = action.payload;
      const existingItem = state.carts.find((item) => item.id === id);
      const updatedAmount = +state.totalAmount - +existingItem.price;
      state.totalAmount = updatedAmount.toFixed(2);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.carts = state.carts.filter((item) => item.id !== id);
      } else {
        const newAmount = existingItem.totalPrice - existingItem.price;
        existingItem.quantity--;
        existingItem.totalPrice = newAmount.toFixed(2);
      }
    },
  },
});
export const ProductsActions = ProductsSlice.actions;
export default ProductsSlice.reducer;
