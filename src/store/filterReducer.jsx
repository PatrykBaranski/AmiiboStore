const initlaState = {
  filterOptions: {},
};

const filterReducer = (state = initlaState, action) => {
  switch (action.type) {
    case "FETCH_FILLTER_OPTION":
      return { ...state, filterOptions: action.payload };
    default:
      return state;
  }
};

export default filterReducer;
