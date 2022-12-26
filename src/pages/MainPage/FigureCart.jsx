import { Link } from "react-router-dom";
const FigureCart = ({ img, name, series, type }) => {
  return (
    <Link>
      <img src={img} />
      <div>
        <span>{type}</span>
        <h2>
          {name} ({series})
        </h2>
      </div>
      <div>
        <span>$10.99</span>
        <button>VIEW PRODUCT</button>
      </div>
    </Link>
  );
};

export default FigureCart;
