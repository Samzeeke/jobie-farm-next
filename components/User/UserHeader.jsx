import classes from "./UserInput.module.css";
import NavLink from "../NavLink";

const UserHeader = () => {
  return (
    <ul className={classes.nav}>
      <li>
        <NavLink href="/user" exact className={classes.nav__list}>
          Profile
        </NavLink>
      </li>
      <li className={classes.nav__list}>
        <NavLink href="/user/orders" exact className={classes.nav__list}>
          Orders
        </NavLink>
      </li>
      <li className={classes.nav__list}>
        <NavLink href="/user/transactions" exact className={classes.nav__list}>
          Transactions
        </NavLink>
      </li>
    </ul>
  );
};
export default UserHeader;
