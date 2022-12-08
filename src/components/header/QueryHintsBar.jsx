import { FaTimes } from "react-icons/fa";
import SearchResults from "./SearchResults";
import classes from "./QueryHintsBar.module.css";

const QueryHintsBar = ({ close }) => {
  return (
    <div className={classes["hint-bar"]}>
      <div className={classes["hint-bar--header"]}>
        <button className={classes["btn-close"]} onClick={close}>
          <FaTimes />
        </button>
      </div>
      <SearchResults />
    </div>
  );
};

export default QueryHintsBar;
