import Link from "next/link";
import Form from "./Form";

import classes from "./SignUp.module.css";
const SignUp = () => {
  const signUpHandler = async (formData) => {
    console.log("BeforeSend", formData);
  };

  return (
    <>
      <div className={classes.login}>
        <h1 className={classes.h1}>Hello!</h1>
        <Form onSubmit={signUpHandler} />
        <p className={classes.p}>
          Already have an account?
          <Link href="/login" className={classes.a}>
            Login
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignUp;
