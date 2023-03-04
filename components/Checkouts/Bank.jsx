import Button from "../Button";
import Modal from "../Modal/Modal";
import { MdCancel } from "react-icons/md";
import classes from "./Bank.module.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
const Bank = ({ onClose, totalAmount, checkoutFormData }) => {
  const closeModal = () => {
    onClose();
  };

  const confirmPayment = async () => {
    const docRef = collection(db, "transactions");
    await addDoc(docRef, {
      email: checkoutFormData?.email,
      firstname: checkoutFormData?.firstname,
      lastname: checkoutFormData?.lastname,
      address: checkoutFormData?.address,
      zip: checkoutFormData?.zip,
      country: checkoutFormData?.country,
      state: checkoutFormData?.state,
      phone: checkoutFormData?.phone,
      status: "Success",
      date: new Date().toLocaleDateString(),
      amount: parseInt(totalAmount) * 100,
      paymentType: "Bank Transfer",
    });
    onClose();
  };

  return (
    <Modal onClick={closeModal}>
      <div className={classes.bank}>
        <h3 className={classes.h3}>PAYMENT DETAILS FOR BANK TRANSFERS</h3>
        <div className={classes.div}>Bank Name: Access Bank</div>
        <div className={classes.div}>
          {" "}
          Account Name: Jobie Agro Farm limited
        </div>
        <div className={classes.div}>Account No: 0088833445</div>
        <div className={classes.btn__box}>
          <Button onClick={confirmPayment} className={classes.button}>
            I have Paid
          </Button>
        </div>
      </div>
      <MdCancel className={classes.cancel} onClick={closeModal} />
    </Modal>
  );
};
export default Bank;
