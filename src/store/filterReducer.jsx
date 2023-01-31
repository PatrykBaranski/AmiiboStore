const initlaState = {
  filterOptions: {},
  checkedItems: [],
};

const filterReducer = (state = initlaState, action) => {
  switch (action.type) {
    case "FETCH_FILLTER_OPTION":
      return { ...state, filterOptions: action.payload };
    case "SET_CHECKED_OPTIONS":
      return {
        ...state,
        checkedItems: [...state.checkedItems, ...action.payload],
      };

    default:
      return state;
  }
};

export default filterReducer;
