import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchFillterOption } from "../../store";
import { FaAngleUp } from "react-icons/fa";
import classes from "./SideBar.module.css";
import { useState } from "react";
function ChechBoxEl({ name }) {
  return (
    <li className={classes["checkbox"]}>
      <label>
        <input type="checkbox" />
        <span style={{ display: "inline" }}>{name}</span>
      </label>
    </li>
  );
}
function ListEl({ label, data }) {
  const [showList, setShowList] = useState(true);
  const [displayData, setDisplayData] = useState(data?.slice(0, 4));
  const [showMoreFilters, setShowMoreFilteres] = useState(false);
  const listHandler = () => setShowList((prev) => !prev);
  useEffect(() => {
    setDisplayData(data?.slice(0, 4));
  }, [data]);
  const showMoreFiltersHandler = () => {
    setDisplayData(data);
    setShowMoreFilteres(true);
  };
  const showLessFiltersHandler = () => {
    setDisplayData(data.slice(0, 4));
    setShowMoreFilteres(false);
  };
  return (
    <div>
      <button onClick={listHandler} className={classes["label-container"]}>
        <h2>{label}</h2>

        <FaAngleUp />
      </button>
      {showList && <ul className={classes["filter-list"]}>{displayData}</ul>}
      {showList && data?.length > 4 && !showMoreFilters && (
        <button onClick={showMoreFiltersHandler}>+ More</button>
      )}
      {showList && data?.length > 4 && showMoreFilters && (
        <button onClick={showLessFiltersHandler}>- Less</button>
      )}
    </div>
  );
}
const SideBar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFillterOption());
  }, []);
  const { franchiseData: franchises, typeData: type } = useSelector(
    (state) => state.filterReducer.filterOptions
  );
  const frinichisesList = franchises?.map((el) => (
    <ChechBoxEl name={`${el.name} (${el.key})`} key={el.key} />
  ));
  console.log(type);
  const typeList = type?.map((el) => (
    <ChechBoxEl name={`${el.name} (${el.key})`} key={el.key} />
  ));
  return (
    <div className={classes["sidebar"]}>
      <h2>Filters</h2>
      <ListEl label={"Franchise"} data={frinichisesList} />
      <ListEl label={"Type"} data={typeList} />
    </div>
  );
};
export default SideBar;
