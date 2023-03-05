import Link from "next/link";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ChangePassword from "../../components/User/ChangePassword";
import UpdateProfile from "../../components/User/UpdateProfile";
import UserHeader from "../../components/User/UserHeader";
import { useAuth } from "../../contexts/auth.context";
import { BsPersonCircle } from "react-icons/bs";

import classes from "./User.module.css";
import { useSelector } from "react-redux";
export default function Profile() {
  const { users } = useSelector((state: any) => state.products);
  const { authUser } = useAuth();
  const signedInUserEmail = authUser?.email;
  const user = users.find(
    (user: { email: string }) => user.email === signedInUserEmail
  );
  return (
    <div>
      <Header />
      <div className={classes.head}>
        <UserHeader />
      </div>
      <div className={classes.container}>
        <div className={classes.left}>
          <p className={classes.icon__box}>
            <BsPersonCircle className={classes.icon} />
          </p>
          <div className={classes.profile__details}>
            <p className={classes.p}>
              Full Name <br />{" "}
              <span
                className={classes.span}
              >{`${user?.lastName} ${user?.firstName}`}</span>
            </p>
            <p className={classes.p}>
              Email:
              <br /> <span className={classes.span}>{user?.email}</span>
            </p>
            <p className={classes.p}>
              Phone Number: <br />{" "}
              <span className={classes.span}>{user?.phone}</span>
            </p>
          </div>
        </div>
        <div className={classes.right}>
          <div>
            <UpdateProfile email={user?.email} />
          </div>
          <div>
            <ChangePassword />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
