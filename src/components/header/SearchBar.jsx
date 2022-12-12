import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";
import classes from "./SearchBar.module.css";
import { setSearchQuery } from "../../store";
import { useEffect } from "react";

const SearchBar = ({ onMouseEnter, onClick }) => {
  const [isClearBtnVisible, setIsClearBtnVisible] = useState(false);
  const query = useSelector((state) => state.searchReducer.query);
  const dispatch = useDispatch();
  useEffect(() => {
    if (query.length >= 3) {
      setIsClearBtnVisible(true);
    } else setIsClearBtnVisible(false);
  }, [query]);
  const subimitHandler = (e) => {
    e.preventDefault();
  };
  const changeInputHandler = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };
  const clearHandler = () => {
    dispatch(setSearchQuery(""));
  };
  return (
    <li
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className={classes["searchbar-container"]}
    >
      <form className={classes.searchbar} onSubmit={subimitHandler}>
        <input
          onChange={changeInputHandler}
          type="text"
          placeholder="Search for a figure"
          value={query}
        />
        {isClearBtnVisible && (
          <button onClick={clearHandler} className={classes["btn--clear"]}>
            CLEAR
          </button>
        )}
        <button className={classes["btn--submit"]} type="submit">
          <IconContext.Provider value={{ color: "#333" }}>
            <FaSearch />
          </IconContext.Provider>
        </button>
      </form>
    </li>
  );
};
export default SearchBar;
