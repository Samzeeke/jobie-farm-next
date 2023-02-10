// import { ProductsActions } from "./ProductsSlice";

// export const fetchAllProducts = () => {
//   return async (dispatch) => {
//     const fetchData = async () => {
//       const response = await fetch(
//         "https://react-http-joel-default-rtdb.firebaseio.com/cart.json"
//       );
//       if (!response.ok) {
//         throw new Error("COuld not fetch data!");
//       }
//       const data = await response.json();

//       return data;
//     };

//     try {
//       const cartData = await fetchData();
//       dispatch(
//         cartActions.replaceCart({
//           items: cartData.items || [],
//           totalQuantity: cartData.totalQuantity,
//         })
//       );
//     } catch (error) {
//       dispatch(
//         uiActions.showNotification({
//           status: "error",
//           message: "Fetching cart data failed",
//           title: "Error",
//         })
//       );
//     }
//   };
// };

// // Creating and action creator Thunk.
// export const sendCartData = (cart) => {
//   return async (dispatch) => {
//     dispatch(
//       uiActions.showNotification({
//         status: "pending",
//         message: "Sending cart data",
//         title: "Sending...",
//       })
//     );

//     const sendRequest = async () => {
//       const response = await fetch(
//         "https://react-http-joel-default-rtdb.firebaseio.com/cart.json",
//         {
//           method: "PUT",
//           body: JSON.stringify({
//             items: cart.items,
//             totalQuantity: cart.totalQuantity,
//           }),
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Sending cart data failed");
//       }
//     };

//     try {
//       await sendRequest();

//       dispatch(
//         uiActions.showNotification({
//           status: "success",
//           message: "Sent cart data successfully",
//           title: "Success",
//         })
//       );
//     } catch (error) {
//       dispatch(
//         uiActions.showNotification({
//           status: "error",
//           message: "Sending cart data failed",
//           title: "Error",
//         })
//       );
//     }
//   };
// };
