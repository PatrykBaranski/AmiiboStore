import { FaTimes } from "react-icons/fa";
import classes from "./QueryHintsBar.module.css";
const QueryHintsBar = () => {
  return (
    <div className={classes["hint-bar"]}>
      <div className={classes["hint-bar--header"]}>
        <FaTimes />
      </div>
      <div className={classes["hint-bar--results"]}></div>
    </div>
  );
};

export default QueryHintsBar;
