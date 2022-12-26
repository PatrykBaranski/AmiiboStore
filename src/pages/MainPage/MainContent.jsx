import { useState } from "react";
import { useEffect } from "react";
import FigureCart from "./FigureCart";
const MainContent = () => {
  const [figuresData, setFigureData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://www.amiiboapi.com/api/amiibo/");
      const data = await res.json();
      setFigureData(data.amiibo);
    };
    fetchData();
  }, []);
  console.log(figuresData);
  return figuresData.map((el) => (
    <FigureCart
      img={el.image}
      series={el.gameSeries}
      name={el.character}
      type={el.type}
    />
  ));
};

export default MainContent;
