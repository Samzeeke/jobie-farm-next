import Image from "next/image";
import { useDispatch } from "react-redux";
import { ProductsActions } from "../../store/Products/ProductsSlice";
import classes from "./SelectedProducts.module.css";

const SelectedItem = ({ title, price, totalPrice, id, image, quantity }) => {
  const dispatch = useDispatch();
  const deleteCartItem = () => {
    dispatch(ProductsActions.removeCartItem({ id }));
  };
  return (
    <tr className={classes.tr}>
      <td>
        <i
          className={`icofont-ui-delete ${classes.delete}`}
          onClick={deleteCartItem}
        ></i>
      </td>
      <td>
        <Image src={image} width={120} height={20} alt={title} />
      </td>
      <td>{title}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{totalPrice}</td>
    </tr>
  );
};
export default SelectedItem;
