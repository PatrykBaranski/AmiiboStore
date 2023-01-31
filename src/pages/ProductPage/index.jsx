import { FaRegHeart } from "react-icons/fa";
import LoadingSpiiner from "../../components/UI/LoadingSpiner";
import classes from "./productPage.module.css";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import LoadingSpiner from "../../components/UI/LoadingSpiner";
const ProductPage = () => {
  const [productDetails, setProductDetails] = useState();
  const typeFormated = productDetails?.type.toLowerCase();
  const [isLoading, setIsLoading] = useState(true);
  console.log(isLoading);
  let price;
  if (typeFormated === "figure") price = 10.99;
  if (typeFormated === "cart") price = 1.99;
  if (typeFormated === "yarn") price = 15.99;
  if (typeFormated === "band") price = 5.99;
  const { productId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await fetch(
        `https://www.amiiboapi.com/api/amiibo/?id=${productId}`
      );
      const data = await res.json();
      setProductDetails(data.amiibo);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  let output;
  if (isLoading) output = <LoadingSpiiner />;
  if (!isLoading)
    output = (
      <div className={classes["products-details-container"]}>
        <div className={classes["product-img"]}>
          <img alt={productDetails?.character} src={productDetails?.image} />
        </div>
        <div className={classes["product-details"]}>
          <div className={classes["product-description"]}>
            <p className={classes["product-type"]}>
              {productDetails?.type.toUpperCase()}
            </p>
            <h2 className={classes["product-title"]}>
              {productDetails?.character} ({productDetails?.amiiboSeries}{" "}
              Collection)
            </h2>
            <p className={classes["product-price"]}>${price}</p>
            <p className={classes["realesed-date"]}>
              <span>Release date: </span>
              {productDetails?.release.eu}
            </p>
          </div>
          <div className={classes["buttons-container"]}>
            <button className={classes["btn-cart"]}>ADD TO CART</button>
            <button className={classes["btn-fav"]}>
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
    );

  return output;
};

export default ProductPage;
