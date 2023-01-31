import { Link } from "react-router-dom";
import classes from "./FigureCart.module.css";
const FigureCart = ({ img, name, series, type, id }) => {
  const typeFormated = type.toLowerCase();

  let price;
  if (typeFormated === "figure") price = 10.99;
  if (typeFormated === "cart") price = 1.99;
  if (typeFormated === "yarn") price = 15.99;
  if (typeFormated === "band") price = 5.99;
  return (
    <Link className={classes["figure-link"]} to={`products/${id}`}>
      <img src={img} />
      <div>
        <span>{type}</span>
        <h2>
          {name} ({series})
        </h2>
      </div>
      <div className={classes["price-container"]}>
        <span className={classes["price"]}>${price}</span>
        <button className={classes["btn-figure"]} to={`products/${id}}`}>
          VIEW PRODUCT
        </button>
      </div>
    </Link>
  );
};

export default FigureCart;
