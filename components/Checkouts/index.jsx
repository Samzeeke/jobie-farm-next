import { usePaystackPayment } from "react-paystack";
import { useAuth } from "../../contexts/auth.context";
import { useRouter } from "next/router";
import { useState } from "react";
import Form from "./Form";
import Bank from "./Bank";
import Flutter from "./Flutter";

import classes from "./Checkouts.module.css";
import { useSelector } from "react-redux";
const Checkouts = () => {
  const [bankModal, setBankModal] = useState(false);
  const [flutterModal, setFlutterModal] = useState(false);
  const [checkoutFormData, setCheckoutFormData] = useState(null)

  const { auth } = useAuth();
  const { totalAmount } = useSelector(state => state.products)
  const config = (email, amount) => ({
    reference: new Date().getTime().toString(),
    email,
    amount, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_TEXT_PUBLIC_KEY,
  });
  // console.log('config', config(checkoutFormData?.email ?? "",  parseInt(totalAmount) * 100))
  const initializePayment = usePaystackPayment(
    config(checkoutFormData?.email ?? "", parseInt(totalAmount) * 100)
  );
  console.log("auth", auth);
  const router = useRouter();

  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    router.push("/shop/ps-checkout-success");
  };
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };
  const getFormDatas = (datas) => {
    console.log(datas);
    setCheckoutFormData(datas);
    setTimeout(() => {
      
      initializePayment(onSuccess, onClose);
    }, 500);
  };
  const closeBank = () => {
    setBankModal(false);
  };
  const closeFlutter = () => {
    setFlutterModal(false);
  };
  return (
    <div className={classes.payment__form}>
      {bankModal && <Bank onClose={closeBank} />}
      {flutterModal && <Flutter onClose={closeFlutter} />}
      <Form
        onPaystack={getFormDatas}
        onBank={() => setBankModal(true)}
        onFlutter={() => setFlutterModal(true)}
      />
    </div>
  );
};
export default Checkouts;
