import { useSelector } from "react-redux";
import SearchResult from "./SearchResult";
import classes from "./SearchResults.module.css";
import store from "../../store";
const SearchResults = () => {
  const query = useSelector((state) => state.query);
  return (
    <>
      {query}
      <ul className={classes["results"]}></ul>
    </>
  );
};
export default SearchResults;
