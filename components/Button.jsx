import Link from "next/link";
import classes from "../styles/Button.module.css";
const Button = ({ link, to, className, onClick, children }) => {
  if (link)
    return (
      <Link href={to} className={` ${className} `}>
        <span>{children}</span>
      </Link>
    );
  return (
    <button onClick={onClick} className={` ${className} ${classes.button}`}>
      {children}
    </button>
  );
};
export default Button;
