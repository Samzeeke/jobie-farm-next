import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserHeader from "../../components/User/UserHeader";
import Orders from "../../components/User/Orders/Orders";
import classes from "./User.module.css";

import { useAuth } from "../../contexts/auth.context";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { db } from "../../firebase";
import { ProductsActions } from "../../store/Products/ProductsSlice";

const AllOrders = () => {
  const { authUser } = useAuth();

  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      // Get all orders from firestore
      const ordersref = collection(db, "orders");
      const ordersSnapshots = await getDocs(ordersref);
      const orDocs = ordersSnapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      const userOrders = orDocs.filter(
        (order) => order.customerEmail === authUser?.email
      );
      dispatch(ProductsActions.addOrders({ orders: userOrders }));
    })();
  }, [dispatch, authUser]);
  return (
    <div>
      <Header />
      <div className={classes.head}>
        <UserHeader />
      </div>
      <Orders />
      <Footer />
    </div>
  );
};
export default AllOrders;
