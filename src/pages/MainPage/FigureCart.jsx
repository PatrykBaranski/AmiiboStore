import { isAsyncThunkAction } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";
import classes from "./FigureCart.module.css";
const FigureCart = ({ img, name, series, type, id }) => {
  let price;
  const typeFormated = type.toLowerCase();
  if (typeFormated === "figure") price = 10.99;
  if (typeFormated === "cart") price = 1.99;
  if (typeFormated === "yarn") price = 15.99;
  if (typeFormated === "band") price = 5.99;
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
        <span className={classes["price"]}>${price}</span>
        <Link className={classes["btn-figure"]} to={id}>
          VIEW PRODUCT
        </Link>
      </div>
    </Link>
  );
};

export default FigureCart;
