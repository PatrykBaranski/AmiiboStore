import { createPortal } from "react-dom";
import classes from "./LoadingSpiner.module.css";
const LoadingSpiner = () => {
  return createPortal(
    <div className={classes["spiner-background"]}>
      <div className={classes["spiner"]}>
        <div
          className={`${classes["spinner-sector"]} ${classes["spinner-sector--top"]}`}
        ></div>
        <div
          className={`${classes["spinner-sector"]} ${classes["spinner-sector--bottom"]}`}
        ></div>
      </div>
    </div>,
    document.body
  );
};
export default LoadingSpiner;
