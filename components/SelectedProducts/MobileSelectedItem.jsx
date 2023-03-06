import Image from "next/image";
import { useDispatch } from "react-redux";
import { ProductsActions } from "../../store/Products/ProductsSlice";
import classes from "./SelectedProducts.module.css";

const MobileSelectedItem = ({
  title,
  price,
  totalPrice,
  id,
  image,
  quantity,
}) => {
  const dispatch = useDispatch();
  const deleteCartItems = () => {
    dispatch(ProductsActions.deleteCartItem({ id }));
  };
  const reduceCartItem = () => {
    dispatch(ProductsActions.removeCartItem({ id }));
  };
  const increaseCartItem = () => {
    dispatch(
      ProductsActions.addCartItem({
        id,
        title,
        image,
        price,
        amount: 1,
        totalPrice,
        quantity,
      })
    );
  };
  return (
    <li className={`${classes.li}`}>
      <div className={classes.box__1}>
        <Image src={image} width={80} height={20} alt={title} />
        <div className={classes.title__box}>
          <p className={classes.title}>{title}</p>
          <p className={classes.price__box}>
            <p>{price}</p>
            <p className={classes.actions}>
              <span>
                <i
                  className={`icofont-ui-delete ${classes.delete}`}
                  onClick={deleteCartItems}
                ></i>
              </span>
              <p className={classes.quantity}>
                <span>
                  <i
                    className={`icofont-minus ${classes.add}`}
                    onClick={reduceCartItem}
                  ></i>
                </span>
                {quantity}
                <span>
                  <i
                    className={`icofont-plus ${classes.add}`}
                    onClick={increaseCartItem}
                  ></i>
                </span>
              </p>
            </p>
          </p>
        </div>
      </div>
      <p className={classes.total__price}>
        Total price: <span>&#8358;{totalPrice}</span>
      </p>
    </li>
  );
};
export default MobileSelectedItem;
