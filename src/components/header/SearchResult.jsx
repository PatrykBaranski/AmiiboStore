import { Link } from "react-router-dom";
import classes from "./SearchResult.module.css";
const SearchResult = (props) => {
  return (
    <li>
      <div className={classes["result"]}>
        <Link to="/">
          <div className={classes["img-container"]}>
            <img
              className={classes["item-img"]}
              src="https://assets.nintendo.eu/image/upload/f_auto/q_auto/t_product_thumbnail/v1/MNS/NOE/000000000010007278/1.1_ProductTile_amiibo_TheLegendofZeldaSkywardSwordHD_ZeldaAndLoftwing_enNOE?_a=ATAK9AA0?w=3840&q=100"
              alt={props.description}
            />
          </div>
          <h2 className={classes["item-title"]}>
            The Legend of Zelda: Breath of the Wild Link Figurine
          </h2>
        </Link>
      </div>
    </li>
  );
};

export default SearchResult;
