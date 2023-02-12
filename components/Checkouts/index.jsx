import Form from "./Form";
import { usePaystackPayment } from 'react-paystack';
import { useAuth } from "../../contexts/auth.context";
import { useRouter } from "next/router";



const config = (email, amount) => ({
  reference: (new Date()).getTime().toString(),
  email,
  amount, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
  publicKey: process.env.NEXT_PUBLIC_PAYSTACK_TEXT_PUBLIC_KEY,
});



const Checkouts = () => {
  const { auth } = useAuth();
  const initializePayment = usePaystackPayment(config(auth?.email ?? "", 20000));
  console.log('auth', auth)
  const router = useRouter()

   // you can call this function anything
 const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
  router.push('/ps-checkout-success')
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log('closed')
}

  const getFormDatas = (datas) => {
    console.log(datas);

      initializePayment(onSuccess, onClose);

  };
  return <Form onSubmit={getFormDatas} />;
};
export default Checkouts;
