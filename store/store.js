import { configureStore } from "@reduxjs/toolkit";

import ProductsSlice from "./Products/ProductsSlice";
const store = configureStore({
  reducer: { products: ProductsSlice },
});
export default store;
