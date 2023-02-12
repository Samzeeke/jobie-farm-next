import { useState } from "react";
import Button from "../../components/Button";
import Input from "./Input";

import classes from "./CheckoutForm.module.css";
const Form = (props) => {
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    amounts: "",
    zip: "",
    country: "",
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
  const amountOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, amounts: e.target.value };
    });
  };

  const emailOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, email: e.target.value };
    });
  };
  const countryOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, country: e.target.value };
    });
  };
  const zipOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, zip: e.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // Send form details to backend
    props.onSubmit({
      email: form.email,
      firstname: form.firstName,
      lastname: form.lastName,
      amounts: form.amounts,
      zip: form.zip,
      country: form.country,
    });
  };

  return (
    <form className={classes.contact__form} onSubmit={submitHandler}>
      <h1 className={classes.h1}>Paystack</h1>
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
      <div className={classes.row}>
        <div className={classes.row__left}>
          <Input
            id="country"
            label="Country"
            type="text"
            placeholder="Where are you from"
            value={form.country}
            onChange={countryOnChangeHandler}
          />
        </div>
        <div className={classes.row__right}>
          <Input
            id="zip"
            label="Zip Code"
            type="text"
            placeholder="Enter your zip code"
            value={form.zip}
            onChange={zipOnChangeHandler}
          />
        </div>
      </div>

      <Input
        id="email"
        label="Email Address"
        type="email"
        placeholder="What's your email address?"
        value={form.email}
        onChange={emailOnChangeHandler}
      />
      <Input
        id="amounts"
        label="Amounts to charge"
        type="number"
        placeholder="Enter Amount to charge"
        value={form.email}
        onChange={amountOnChangeHandler}
      />

      <div className={classes.btn__box}>
        <Button id="btn__submit" type="submit" className={classes.button}>
          Pay Now
        </Button>
      </div>
    </form>
  );
};
export default Form;
