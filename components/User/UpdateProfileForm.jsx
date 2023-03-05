import { useState } from "react";
import Button from "../Button";
import Input from "./UserInput";

import classes from "./UpdateProfile.module.css";

const Form = ({ onSubmit, email, firstName, lastName, phone }) => {
  const [form, setForm] = useState({
    email: email,
    firstName: firstName,
    lastName: lastName,
    phone: phone,
  });
  const firstNameOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, firstName: e.target.value };
    });
  };
  const lastNameOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, lastName: e.target.value };
    });
  };

  const emailOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, email: email };
    });
  };

  const phoneOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, phone: e.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onSubmit({
      email: form.email,
      firstName: form.firstName,
      lastName: form.lastName,
      phone: form.phone,
    });
  };

  return (
    <form className={classes.contact__form} onSubmit={submitHandler}>
      <h1 className={classes.h1}>Update Profile</h1>
      <div className={classes.row}>
        <div className={classes.row__left}>
          <Input
            id="firstName"
            label="First Name"
            type="text"
            placeholder="What's your first name?"
            value={form.firstName}
            onChange={firstNameOnChangeHandler}
          />
        </div>
        <div className={classes.row__right}>
          <Input
            id="lastName"
            label="Last Name"
            type="text"
            placeholder="What's your last name?"
            value={form.lastName}
            onChange={lastNameOnChangeHandler}
          />
        </div>
      </div>

      <Input
        id="email"
        label="Email Address"
        type="email"
        readOnly
        placeholder={email}
        value={form.email}
        onChange={emailOnChangeHandler}
      />
      <Input
        id="phone"
        label="Phone Number"
        type="nomber"
        placeholder="Enter your phone number"
        value={form.phone}
        onChange={phoneOnChangeHandler}
      />

      <div className={classes.btn__box}>
        <Button type="submit" className={classes.button}>
          Update Profile
        </Button>
      </div>
    </form>
  );
};
export default Form;
