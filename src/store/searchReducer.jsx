const initsialState = {
  results: [],
  query: "",
};
const searchReducer = (state = initsialState, action) => {
  switch (action.type) {
    case "FETCH_SEARCH_RESULTS":
      return { ...state, results: action.payload };
    case "SET_SEARCH_QUERY":
      return { ...state, query: action.payload };
    default:
      return state;
  }
};
export default searchReducer;
