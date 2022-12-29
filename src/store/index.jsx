import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import searchReducer from "./searchReducer";
import filterReducer from "./filterReducer";
const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed loading data");
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};
export const fetchFillterOption = () => {
  return async (dispatch) => {
    const franchiseUrl = `https://www.amiiboapi.com/api/gameseries`;
    const typeUrl = `https://www.amiiboapi.com/api/type`;
    const { amiibo: franchiseData } = await fetchData(franchiseUrl);
    const { amiibo: typeData } = await fetchData(typeUrl);

    dispatch({
      type: "FETCH_FILLTER_OPTION",
      payload: {
        franchiseData: franchiseData,
        typeData: typeData,
      },
    });
  };
};
export const fetchSearchResults = () => {
  return async (dispatch, getState) => {
    try {
      const { searchReducer } = getState();
      const { query } = searchReducer;
      const url = `https://www.amiiboapi.com/api/amiibo/?character=${query}`;
      const data = await fetchData(url);

      dispatch({
        type: "FETCH_SEARCH_RESULTS",
        payload: data.amiibo?.slice(0, 5),
      });
    } catch (err) {
      dispatch({
        type: "ERROR_FETCHING_DATA",
        payload: "Sorry, we found nothing for this query",
      });
    }
  };
};
export const setSearchQuery = (payload) => {
  return {
    type: "SET_SEARCH_QUERY",
    payload,
  };
};
export const setIsLoading = (payload) => {
  return {
    type: "SET_IS_LOADING",
    payload,
  };
};
export const setCheckedOptions = (payload) => {
  return {
    type: "SET_CHECKED_OPTIONS",
    payload,
  };
};
export const delateCheckedOptions = (payload) => {
  return {
    type: "DELATE_CHECKED_OPTION",
    payload,
  };
};
const store = configureStore({
  reducer: { searchReducer, filterReducer },
  middleware: [thunk],
});
export default store;
