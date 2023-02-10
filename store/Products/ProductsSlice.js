import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      title: "Light Brown Eggs",
      image: "/assets/images/products/product/01.png",
      price: 39.99,
    },
    {
      id: 2,
      title: "Little Chicken Broiler",
      image: "/assets/images/products/product/02.png",
      price: 39.99,
    },
    {
      id: 3,
      title: "Little Chicken Broiler",
      image: "/assets/images/products/product/03.png",
      price: 39.99,
    },
    {
      id: 4,
      title: "Little Chicken Broiler",
      image: "/assets/images/products/product/04.png",
      price: 39.99,
    },
    {
      id: 8,
      title: "Little Chicken Broiler",
      image: "/assets/images/products/product/05.png",
      price: 39.99,
    },
    {
      id: 5,
      title: "Little Chicken Broiler",
      image: "/assets/images/products/product/06.png",
      price: 39.99,
    },
    {
      id: 6,
      title: "Little Chicken Broiler",
      image: "/assets/images/products/product/04.png",
      price: 39.99,
    },
    {
      id: 7,
      title: "Little Chicken Broiler",
      image: "/assets/images/products/product/04.png",
      price: 39.99,
    },
    {
      id: 8,
      title: "Little Chicken Broiler",
      image: "/assets/images/products/product/04.png",
      price: 39.99,
    },
    {
      id: 9,
      title: "Little Chicken Broiler",
      image: "/assets/images/products/product/04.png",
      price: 39.99,
    },
    {
      id: 10,
      title: "Little Chicken Broiler",
      image: "/assets/images/products/product/04.png",
      price: 39.99,
    },

    {
      id: 11,
      title: "Light Brown Eggs",
      image: "/assets/images/products/product/01.png",
      price: 39.99,
    },
    {
      id: 12,
      title: "Little Chicken Broiler",
      image: "/assets/images/products/product/02.png",
      price: 39.99,
    },
    {
      id: 13,
      title: "Little Chicken Broiler",
      image: "/assets/images/products/product/03.png",
      price: 39.99,
    },
  ],
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
      state.products = action.payload;
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
      const existingItem = state.carts.find((item) => item.id === +id);
      const updatedAmount = +state.totalAmount - +existingItem.price;
      state.totalAmount = updatedAmount.toFixed(2);
      if (existingItem.quantity === 1) {
        state.carts = state.carts.filter((item) => item.id !== id);
        state.totalQuantity--;
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
