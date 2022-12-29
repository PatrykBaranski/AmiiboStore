import { useState } from "react";
import { useEffect } from "react";
import FigureCart from "./FigureCart";
import classes from "./MainContent.module.css";
const MainContent = () => {
  const [figuresData, setFigureData] = useState([]);
  const [numberOfResults, setNumberOfResults] = useState(12);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://www.amiiboapi.com/api/amiibo/");
      const data = await res.json();
      setFigureData(data.amiibo);
      setNumberOfResults(12);
    };
    fetchData();
  }, []);
  const onClickHandler = () => {
    setNumberOfResults((prev) => prev + 12);
  };
  const displayFigureData = figuresData.slice(0, numberOfResults);
  return (
    <div className={classes["figure-container"]}>
      {displayFigureData.map((el) => (
        <FigureCart
          img={el.image}
          series={el.gameSeries}
          name={el.character}
          type={el.type}
          id={`${el.head}${el.tail}`}
          key={`${el.head}${el.tail}`}
        />
      ))}
      <button className={classes["btn-more"]} onClick={onClickHandler}>
        SHOW MORE
      </button>
    </div>
  );
};

export default MainContent;
