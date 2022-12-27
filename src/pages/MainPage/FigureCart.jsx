import { Link } from "react-router-dom";
import classes from "./FigureCart.module.css";
const FigureCart = ({ img, name, series, type, id }) => {
  return (
    <Link className={classes["figure-link"]} to={id}>
      <img src={img} />
      <div>
        <span>{type}</span>
        <h2>
          {name} ({series})
        </h2>
      </div>
      <div className={classes["price-container"]}>
        <span className={classes["price"]}>$10.99</span>
        <Link className={classes["btn-figure"]} to={id}>
          VIEW PRODUCT
        </Link>
      </div>
    </Link>
  );
};

export default FigureCart;
