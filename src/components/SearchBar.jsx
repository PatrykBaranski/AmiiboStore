import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";
import classes from "./SearchBar.module.css";
const SearchBar = () => {
  const subimitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <li className={classes["searchbar-container"]}>
      <form className={classes.searchbar} onSubmit={subimitHandler}>
        <input type="text" placeholder="Search for a figure" />
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
