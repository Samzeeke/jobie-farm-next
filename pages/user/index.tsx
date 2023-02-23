import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useAuth } from "../../contexts/auth.context";
import classes from "./User.module.css";
export default function Profile() {
  const { authUser, loading } = useAuth();
  return (
    <>
      <Header />
      <div className={classes.container}>
        <div className={classes.profile}>
          <div className={classes.profile__details}>
            <h1 className={classes.h1}>Null</h1>
            <p className={classes.p}>Email: {authUser?.email}</p>
            <p className={classes.p}>Phone Number: null</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
