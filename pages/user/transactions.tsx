import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserHeader from "../../components/User/UserHeader";

import { useAuth } from "../../contexts/auth.context";
import classes from "./User.module.css";

import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AllTransactions from "../../components/User/Transactions/AllTransactions";
import { db } from "../../firebase";
import { ProductsActions } from "../../store/Products/ProductsSlice";

const Transactions = () => {
  const dispatch = useDispatch();
  const { authUser } = useAuth();
  useEffect(() => {
    (async () => {
      // Get all transactions from firestore
      const transactionsRef = collection(db, "transactions");
      const transactionsSnapshots = await getDocs(transactionsRef);
      const traDocs = transactionsSnapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      const userTransactions = traDocs.filter(
        (transaction: any) => transaction.email === authUser?.email
      );
      dispatch(
        ProductsActions.addTransactions({ transactions: userTransactions })
      );
    })();
  }, [dispatch, authUser]);
  return (
    <div>
      <Header />
      <div className={classes.head}>
        <UserHeader />
      </div>
      <AllTransactions />
      <Footer />
    </div>
  );
};
export default Transactions;
