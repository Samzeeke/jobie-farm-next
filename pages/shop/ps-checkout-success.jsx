import Header from "../../components/Header";
import Footer from "../../components/Footer";
import classes from "../../components/Checkouts/Checkouts.module.css";
import { useRouter } from "next/router";
const PsCheckoutSuccess = () => {
  const router = useRouter();
  return (
    <>
      <Header />
      <section className={classes.contact__form}>
        <h2 className={classes.success}>Payment Successful</h2>
        <div className={classes.btn__box}>
          {" "}
          <button onClick={() => router.push("/")} className={classes.button}>
            Go home
          </button>
        </div>{" "}
      </section>
      <Footer />
    </>
  );
};
export default PsCheckoutSuccess;
