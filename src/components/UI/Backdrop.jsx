import { createPortal } from "react-dom";
import classes from "./Backdrop.module.css";
const Backdrop = () => {
  return createPortal(
    <div className={classes["backdrop"]}></div>,
    document.getElementById("root")
  );
};
export default Backdrop;
