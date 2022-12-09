const initsialState = {
  isLoading: false,
  results: [],
  query: "",
};
const searchReducer = (state = initsialState, action) => {
  switch (action.type) {
    case "FETCH_SEARCH_RESULTS": {
      return { ...state, results: action.payload, isLoading: false };
    }
    case "SET_SEARCH_QUERY":
      return { ...state, query: action.payload };
    default:
      return state;
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
  }
};
export default searchReducer;
