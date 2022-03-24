import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/actionCreates";

const MovieDetail = () => {
  const { id } = useParams();

  let { movieDetail } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const { fetchMovieDetail } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    fetchMovieDetail(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="pt-36 px-6">
      <div className="rounded shadow-lg shadow-slate-400">
        <Link to={-1} className="flex items-center pt-6 pl-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline-block mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
              clipRule="evenodd"
            />
          </svg>
          <span>Back</span>
        </Link>
        <img
          src={movieDetail.Poster}
          alt={`Poster ${movieDetail.Title}`}
          className="w-1/2 mx-auto rounded pt-8"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-lg leading-5 mb-2 text-slate-700 text-center">
            {movieDetail.Title}
          </div>
          <div className="flex items-center justify-evenly flex-wrap gap-2">
            <span className="mr-4 flex items-center text-xs w-1/2 justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              <p>{movieDetail.Released}</p>
            </span>
            <span className="mr-4 flex items-center text-xs">
              <b className="mr-2">Rated:</b>
              <p>{movieDetail.Rated}</p>
            </span>

            {movieDetail.Genre &&
              movieDetail.Genre.replace(/\s/g, "")
                .split(",")
                .map((mg, i) => (
                  <span
                    key={i}
                    className="inline-block bg-gray-200 rounded-full px-2 py-0.5 text-xs font-semibold text-gray-700 mr-2"
                  >
                    {mg}
                  </span>
                ))}
            <span className="mr-4 flex items-center text-xs">
              <b className="mr-2">IMDB Rating:</b>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>{movieDetail.imdbRating}</span>
              </p>
            </span>
          </div>
          <hr className="mt-2 mb-3" />
          <p className="text-xs pb-2">{movieDetail.Plot}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
