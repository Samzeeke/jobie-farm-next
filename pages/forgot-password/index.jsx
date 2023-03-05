import Link from "next/link";
import Form from "./Form";
import classes from "./ForgotForm.module.css";
import useFirebaseAuth from "./../../hooks/useFirebaseAuth";

const ForgotPassword = () => {
  const { requestForgotPassword } = useFirebaseAuth();
  const getFormDetails = async ({email}) => {
    try {
      await requestForgotPassword(email)
      window.alert("Please check your email to reset your passsword")
    } catch (error) {
      console.log("error for forgot password", error)
    }
  };
  return (
    <section className={classes.forgot__password}>
      <p className={classes.text}>
        Kindly enter the email associated with your account and we will send you
        a link to reset your password.
      </p>
      <Form onSubmit={getFormDetails} />
      <p className={classes.p}>
        Do not have an account?
        <Link href="/signup" className={classes.a}>
          Create now
        </Link>
      </p>
    </section>
  );
};
export default ForgotPassword;
