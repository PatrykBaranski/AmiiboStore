const initlaState = {
  filterOptions: {},
  checkedItems: {
    series: [],
    type: [],
  },
};

const filterReducer = (state = initlaState, action) => {
  switch (action.type) {
    case "FETCH_FILLTER_OPTION":
      return { ...state, filterOptions: action.payload };
    case "SET_CHECKED_OPTIONS":
      return {
        ...state,
        checkedItems:
          action.payload.type === "series"
            ? {
                ...state.checkedItems,
                series: [...state.checkedItems.series, action.payload.value],
              }
            : {
                ...state.checkedItems,
                type: [...state.checkedItems.type, action.payload.value],
              },
      };
    case "DELATE_CHECKED_OPTION":
      return {
        ...state,
        checkedItems:
          action.payload.type === "series"
            ? {
                ...state.checkedItems,
                series: state.checkedItems.series.filter(
                  (el) => el.id !== action.payload.id
                ),
              }
            : {
                ...state.checkedItems,
                type: state.checkedItems.type.filter(
                  (el) => el.id !== action.payload.id
                ),
              },
      };
    default:
      return state;
  }
};

export default filterReducer;
