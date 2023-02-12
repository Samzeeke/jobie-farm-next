import Link from "next/link";

import Form from "./Form";

import classes from "./Login.module.css";

const Login = () => {
  const signInHandler = async (formData) => {
    console.log(formData);
  };

  return (
    <>
      <div className={classes.login} data-testid="login__page">
        <h1 className={classes.h1}>Welcome back!</h1>
        <Form onSubmit={signInHandler} />

        <p className={classes.p}>
          Do not have an account?
          <Link href="/signup" className={classes.a}>
            Create now
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
