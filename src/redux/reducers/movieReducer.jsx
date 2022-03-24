import {
  FETCH_MOVIES,
  FETCH_TOTAL_RESULTS,
  UPDATE_PAGE,
  UPDATE_SEARCH_VALUE,
} from "../actionTypes";

const initialState = {
  listMovie: [],
  searchValue: "pirates",
  page: 1,
  totalResults: 0,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIES:
      if (payload.next) {
        let prevMovie = state.listMovie;
        return {
          ...state,
          listMovie: [...prevMovie, ...payload.results],
        };
      } else {
        return { ...state, listMovie: payload.results };
      }
    case UPDATE_SEARCH_VALUE:
      return { ...state, searchValue: payload };
    case UPDATE_PAGE:
      return { ...state, page: payload };
    case FETCH_TOTAL_RESULTS:
      return { ...state, totalResults: payload };
    default:
      return state;
  }
};

export default reducer;
