import { useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";
import classes from "./SearchBar.module.css";
import { setSearchQuery } from "../../store";

const SearchBar = ({ onMouseEnter, onClick }) => {
  const query = useSelector((state) => state.query);
  const dispatch = useDispatch();
  const subimitHandler = (e) => {
    e.preventDefault();
  };
  const changeInputHandler = (e) => {
    dispatch(setSearchQuery(e.target.value));
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
        <button type="submit">
          <IconContext.Provider value={{ color: "#333" }}>
            <FaSearch />
          </IconContext.Provider>
        </button>
      </form>
    </li>
  );
};
export default SearchBar;
