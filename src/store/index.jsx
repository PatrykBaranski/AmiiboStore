import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import searchReducer from "./searchReducer";
import useHttp from "../hooks/useHttp";
import filterReducer from "./filterReducer";
export const fetchFillterOption = () => {
  return async (dispatch) => {
    const franchiseUrl = `https://www.amiiboapi.com/api/gameseries`;
    const typeUrl = `https://www.amiiboapi.com/api/type`;
    const { amiibo: franchiseData } = await useHttp(franchiseUrl);
    const { amiibo: typeData } = await useHttp(typeUrl);

    dispatch({
      type: "FETCH_FILLTER_OPTION",
      payload: { franchiseData, typeData },
    });
  };
};
export const fetchSearchResults = () => {
  return async (dispatch, getState) => {
    const { searchReducer } = getState();
    const { query } = searchReducer;
    const url = `https://www.amiiboapi.com/api/amiibo/?character=${query}`;
    const data = await useHttp(url);

    dispatch({
      type: "FETCH_SEARCH_RESULTS",
      payload: data.amiibo?.slice(0, 5),
    });
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
const store = configureStore({
  reducer: { searchReducer, filterReducer },
  middleware: [thunk],
});
// store.subscribe(() => console.log(store.getState()));
export default store;
