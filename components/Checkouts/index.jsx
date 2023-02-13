import Form from "./Form";
import { usePaystackPayment } from "react-paystack";
import { useAuth } from "../../contexts/auth.context";
import { useRouter } from "next/router";
import { useState } from "react";
import classes from "./Checkouts.module.css";
import Bank from "./Bank";
import Flutter from "./Flutter";
const config = (email, amount) => ({
  reference: new Date().getTime().toString(),
  email,
  amount, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
  publicKey: process.env.NEXT_PUBLIC_PAYSTACK_TEXT_PUBLIC_KEY,
});

const Checkouts = () => {
  const [method, setMethod] = useState(undefined);
  const { auth } = useAuth();
  const initializePayment = usePaystackPayment(
    config(auth?.email ?? "", 20000)
  );
  console.log("auth", auth);
  const router = useRouter();

  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    router.push("/ps-checkout-success");
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const getFormDatas = (datas) => {
    console.log(datas);

    initializePayment(onSuccess, onClose);
  };
  return (
    <>
      <div className={classes.payment__form}>
        <h2 className={classes.heading}>Select payment method</h2>
        <div className={classes.select__box}>
          <div>
            <input
              id="bank"
              name="method"
              type="radio"
              className={classes.input}
              onClick={() => setMethod("bank")}
            />
            <label for="bank">Bank transfer</label>
          </div>
          <div>
            <input
              id="paystack"
              name="method"
              type="radio"
              className={classes.input}
              onClick={() => setMethod("paystack")}
            />
            <label for="paystack">Paystack</label>
          </div>
          <div>
            <input
              id="flutter"
              name="method"
              type="radio"
              className={classes.input}
              onClick={() => setMethod("flutter")}
            />
            <label for="flutter">Flutter</label>
          </div>
        </div>
      </div>
      {method === "bank" && <Bank />}
      {method === "flutter" && <Flutter />}
      {method === "paystack" && <Form onSubmit={getFormDatas} />}
    </>
  );
};
export default Checkouts;
