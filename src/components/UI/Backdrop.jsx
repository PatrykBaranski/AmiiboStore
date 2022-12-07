import { createPortal } from "react-dom";
import classes from "./Backdrop.module.css";
const Backdrop = ({ onClick }) => {
  return createPortal(
    <div onClick={onClick} className={classes["backdrop"]}></div>,
    document.body
  );
};
export default Backdrop;
