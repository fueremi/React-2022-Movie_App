import {
  FETCH_MOVIES,
  FETCH_MOVIE_DETAIL,
  FETCH_TOTAL_RESULTS,
  UPDATE_PAGE,
  UPDATE_SEARCH_VALUE,
  LOADING_FETCH,
} from "../actionTypes";

const initialState = {
  listMovie: [],
  movieDetail: {},
  searchValue: "pirates",
  page: 1,
  totalResults: 0,
  isLoading: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIES:
      if (payload.next) {
        let prevMovie = state.listMovie;
        return {
          ...state,
          listMovie: [...prevMovie, ...payload.results],
          isLoading: false,
        };
      } else {
        return { ...state, listMovie: payload.results, isLoading: false };
      }
    case LOADING_FETCH:
      return { ...state, isLoading: true };
    case FETCH_MOVIE_DETAIL:
      return { ...state, movieDetail: payload, isLoading: false };
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
