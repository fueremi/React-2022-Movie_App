import axios from "axios";
import {
  FETCH_MOVIES,
  FETCH_TOTAL_RESULTS,
  UPDATE_PAGE,
  UPDATE_SEARCH_VALUE,
} from "../actionTypes";

export const fetchMovies = (searchValue, page, next) => {
  return async (dispatch) => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    try {
      const response = await axios({
        method: "GET",
        url: "https://www.omdbapi.com",
        params: {
          apikey: process.env.REACT_APP_API_KEY,
          s: searchValue,
          page: page,
        },
        cancelToken: source.token,
      });
      const results = response.data;
      if (results.Response === "True") {
        dispatch({
          type: FETCH_MOVIES,
          payload: { results: results.Search, next },
        });
        dispatch({
          type: FETCH_TOTAL_RESULTS,
          payload: results.totalResults,
        });
      }
    } catch (err) {
      if (axios.isCancel(err)) return;
      console.log(err);
    }
  };
};

export const updateSearchValue = (searchValue) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_SEARCH_VALUE,
      payload: searchValue,
    });
  };
};

export const updatePage = (page) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_PAGE,
      payload: page,
    });
  };
};
