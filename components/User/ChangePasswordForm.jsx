import { useState } from "react";
import Button from "../Button";
import Input from "./UserInput";

import classes from "./ChangePassword.module.css";
const ChangePasswordForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const oldPasswordOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, oldPassword: e.target.value };
    });
  };
  const newPasswordOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, newPassword: e.target.value };
    });
  };

  const confirmNewPasswordOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, confirmNewPassword: e.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onSubmit({
      oldPassword: form.oldPassword,
      newPassword: form.newPassword,
      confirmNewPassword: form.confirmNewPassword,
    });
  };

  return (
    <form className={classes.contact__form} noValidate onSubmit={submitHandler}>
      <h1 className={classes.h1}>Change Password</h1>
      <Input
        id="oldPassword"
        label="Old Password "
        type="text"
        placeholder="Enter your old password"
        value={form.oldPassword}
        onChange={oldPasswordOnChangeHandler}
      />
      <Input
        id="newPassword"
        label="New Password"
        type="text"
        placeholder="Enter your new password"
        value={form.newPassword}
        onChange={newPasswordOnChangeHandler}
      />
      <Input
        id="confirmNewPassword"
        label="New Password"
        type="text"
        placeholder="Enter your new password again"
        value={form.confirmNewPassword}
        onChange={confirmNewPasswordOnChangeHandler}
      />

      <div className={classes.btn__box}>
        <Button type="submit" className={classes.button}>
          Change Password
        </Button>
      </div>
    </form>
  );
};
export default ChangePasswordForm;
