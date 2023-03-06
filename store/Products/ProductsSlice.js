import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  carts: [],
  totalAmount: 0,
  totalQuantity: 0,
  changed: false,
  users: [],
  transactions: [],
  filteredTransactions: [],
  noTransaction: false,
  orders: [],
  filteredOrders: [],
  noOrder: false,
};

const ProductsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    addProducts(state, action) {
      state.products = action.payload.products;
    },
    addCartItem(state, action) {
      state.totalQuantity++;
      const newItem = action.payload;
      const existingItem = state.carts.find((item) => item.id === newItem.id);
      const updatedAmount = +state.totalAmount + +newItem.price;
      state.totalAmount = updatedAmount.toFixed(2);
      const newItemPrice = +newItem.price;
      if (existingItem) {
        existingItem.quantity++;

        existingItem.totalPrice = Math.round(
          existingItem.totalPrice + Number(parseFloat(newItemPrice).toFixed(2))
        );
      } else {
        state.carts.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: Number(parseFloat(newItemPrice).toFixed(2)),
          title: newItem.title,
          image: newItem.image,
          type: newItem.type,
        });
      }
    },
    removeCartItem(state, action) {
      const { id } = action.payload;
      const existingItem = state.carts.find((item) => item.id === id);
      const updatedAmount = +state.totalAmount - +existingItem.price;
      state.totalAmount = updatedAmount.toFixed(2);
      state.totalQuantity = state.totalQuantity - +existingItem.quantity;
      if (existingItem.quantity === 1) {
        state.carts = state.carts.filter((item) => item.id !== id);
      } else {
        const newAmount = existingItem.totalPrice - existingItem.price;
        existingItem.quantity--;
        existingItem.totalPrice = newAmount.toFixed(2);
      }
    },
    deleteCartItem(state, action) {
      const { id } = action.payload;
      const existingItem = state.carts.find((item) => item.id === id);
      const updatedAmount = +state.totalAmount - +existingItem.totalPrice;
      state.totalAmount = updatedAmount.toFixed(2);
      state.totalQuantity = state.totalQuantity - +existingItem.quantity;
      state.carts = state.carts.filter((item) => item.id !== id);
    },
    addUsers(state, action) {
      state.users = action.payload.users;
    },

    addTransactions(state, action) {
      state.transactions = action.payload.transactions;
    },
    addOrders(state, action) {
      state.orders = action.payload.orders;
    },

    filterByDate(state, action) {
      function isDateInRange(dateToCheck, startDate, endDate) {
        return dateToCheck >= startDate && dateToCheck <= endDate;
      }
      const { startDate, endDate } = action.payload;
      const filtered = state.transactions.filter((item) => {
        const date = new Date(item.date);
        if (isDateInRange(date, startDate, endDate)) return true;
        else return false;
      });
      if (filtered.length === 0) {
        state.noTransaction = true;
      } else {
        state.noTransaction = false;
      }
      state.filteredTransactions = filtered;
    },
    filterOrders(state, action) {
      const { type, order, payment } = action.payload;
      if (type === "All" && order === "All" && payment === "All") {
        state.filteredOrders = state.orders;
        return;
      }
      const filtered = state.orders.filter((ord) => {
        return (
          (ord.type === type || type === "All") &&
          (ord.orderStatus === order || order === "All") &&
          (ord.paymentStatus === payment || payment === "All")
        );
      });
      state.filteredOrders = filtered;
    },
  },
});
export const ProductsActions = ProductsSlice.actions;
export default ProductsSlice.reducer;
