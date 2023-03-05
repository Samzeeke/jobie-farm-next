import { collection, updateDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { ProductsActions } from "../../../store/Products/ProductsSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineSave } from "react-icons/ai";
import classes from "./Orders.module.css";
import Modal from "../../Modal/Modal";
import Carts from "./Carts/Carts";

const OrderItem = ({
  id,
  totalQuantity,
  customerName,
  customerEmail,
  customerPhone,
  grandTotal,
  carts,
  paymentStatus,
  orderStatus,
}) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <tr className={classes.tr}>
        <td className={classes.td}>
          <span>{customerName}</span> <br /> <span>{customerEmail}</span> <br />
          <span>{customerPhone}</span>
        </td>
        <td className={classes.td}>{totalQuantity}</td>
        <td className={classes.td}>&#8358;{grandTotal}</td>
        <td className={classes.td}>{paymentStatus}</td>
        <td className={classes.td}>{orderStatus}</td>
        <td>
          <p onClick={() => setShowModal(true)} className={classes.action}>
            View
          </p>
        </td>
        {showModal === true ? (
          <Modal onClick={() => setShowModal(false)}>
            <Carts carts={carts} totalAmount={grandTotal} />
          </Modal>
        ) : (
          ""
        )}
      </tr>
    </>
  );
};
export default OrderItem;
