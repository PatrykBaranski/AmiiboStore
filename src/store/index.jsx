import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import searchReducer from "./searchReducer";
export const fetchSearchResults = () => {
  return async (dispatch, getState) => {
    const { query } = getState();
    console.log(query);
    const request = await fetch(
      `https://www.amiiboapi.com/api/amiibo/?character=${query}`
    );
    const data = await request.json();
    console.log(data);
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

const store = configureStore({ reducer: searchReducer, middleware: [thunk] });
// store.subscribe(() => console.log(store.getState()));
export default store;
