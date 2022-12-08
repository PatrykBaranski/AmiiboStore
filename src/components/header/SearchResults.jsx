import { useSelector, useDispatch } from "react-redux";
import SearchResult from "./SearchResult";
import classes from "./SearchResults.module.css";
import { fetchSearchResults } from "../../store";
import store from "../../store";
import { useEffect } from "react";
const SearchResults = () => {
  const dispatch = useDispatch();
  const { query, results } = useSelector((state) => state);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(fetchSearchResults());
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [query]);
  return (
    <>
      <ul className={classes["results"]}>
        {results?.map((el) => (
          <SearchResult
            name={`${el.amiiboSeries} ${el.character}`}
            img={el.image}
            key={el.tail}
          />
        ))}
      </ul>
    </>
  );
};
export default SearchResults;
