import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import searchReducer from "./searchReducer";
export const fetchSearchResults = () => {
  return async (dispatch, getState) => {
    const query = getState();
    console.log(query);
    dispatch({
      type: "FETCH_SEARCH_RESULTS",
      payload: query,
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
