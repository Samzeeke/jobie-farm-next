import { useState } from "react";
import Button from "../../components/Button";
import Input from "./Input";

import classes from "./Form.module.css";
import Link from "next/link";
const Form = (props) => {
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    amounts: "",
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

  const submitHandler = (event) => {
    event.preventDefault();

    // Send form details to backend
    props.onSubmit({
      email: form.email,
      firstname: form.firstName,
      lastname: form.lastName,
      amount: form.amounts,
    });
  };

  return (
    <form className={classes.contact__form} onSubmit={submitHandler}>
      <h1 className={classes.h1}>Find out more...</h1>
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
        <div>
          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="What's your email address?"
            value={form.email}
            onChange={emailOnChangeHandler}
          />
        </div>
      </div>
      <div className={classes.row}>
        <div>
          <Input
            id="amounts"
            label="Amounts"
            type="number"
            placeholder="What's your email address?"
            value={form.email}
            onChange={amountOnChangeHandler}
          />
        </div>
      </div>

      <h3 className={classes.h3}>
        By submitting this form, I confirm that I have read and agree to the{" "}
        <Link href="/terms-of-service" className={classes.link}>
          Privacy Policy.
        </Link>
      </h3>

      <div className={classes.btn__box}>
        <Button id="btn__submit" type="submit" className={classes.button}>
          Get Started
        </Button>
      </div>
    </form>
  );
};
export default Form;
