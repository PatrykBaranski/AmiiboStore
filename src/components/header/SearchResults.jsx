import { useSelector, useDispatch } from "react-redux";
import SearchResult from "./SearchResult";
import classes from "./SearchResults.module.css";
import { fetchSearchResults, setIsLoading } from "../../store";
import { useEffect } from "react";
import LoadingSpiner from "../UI/LoadingSpiner";
const SearchResults = () => {
  const dispatch = useDispatch();

  const { query, results, isLoading } = useSelector(
    (state) => state.searchReducer
  );
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query.length >= 3) {
        dispatch(fetchSearchResults());
        dispatch(setIsLoading(true));
      }
    }, 500);
    return () => {
      clearTimeout(timeoutId);
      // dispatch(setIsLoading(false));
    };
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
      {isLoading && <LoadingSpiner />}
    </>
  );
};

export default SearchResults;
