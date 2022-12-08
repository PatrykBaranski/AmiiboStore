import { Link } from "react-router-dom";
import classes from "./SearchResult.module.css";
const SearchResult = ({ name, img }) => {
  return (
    <li>
      <div className={classes["result"]}>
        <Link to="/">
          <div className={classes["img-container"]}>
            <img className={classes["item-img"]} src={img} />
          </div>
          <h2 className={classes["item-title"]}>{name}</h2>
        </Link>
      </div>
    </li>
  );
};

export default SearchResult;
