import noPoster from "../assets/images/no-poster.png";

const MovieCardComponent = ({ movie }) => {
  return (
    <div className="flex flex-col justify-between rounded-lg shadow-lg overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-70 lg:w-1/5 xl:w-1/6 transition hover:cursor-pointer hover:scale-110">
      {movie.Poster === "N/A" ? (
        <img
          src={noPoster}
          className="w-2/3 h-80 sm:h-72 md:h-60 block mx-auto rounded-lg mt-4"
          alt="no-poster"
        />
      ) : (
        <img
          src={movie.Poster}
          className="w-2/3 h-80 sm:h-72 md:h-60 block mx-auto rounded-lg mt-4"
          alt=""
        />
      )}

      <div className="flex flex-1 flex-col justify-between px-6 py-4">
        {(() => {
          if (movie.Title.length > 30) {
            return (
              <div className="relative flex flex-col items-center group font-bold text-sm mb-2 text-slate-700">
                {movie.Title.slice(0, 30) + "..."}
                <div className="absolute bottom-0 flex-col items-center hidden mb-6 group-hover:flex">
                  <span className="relative z-10 p-2 w-40 text-xs leading-none text-white whitespace-no-wrap bg-slate-700 shadow-lg rounded-lg">
                    {movie.Title}
                  </span>
                  <div className="w-3 h-3 -mt-2 rotate-45 bg-slate-700"></div>
                </div>
              </div>
            );
          } else {
            return (
              <div className="flex flex-col font-bold text-sm mb-2 text-slate-700">
                {movie.Title}
              </div>
            );
          }
        })()}
        <p className="text-xs text-slate-600 flex items-center justify-between">
          <span>{movie.Year}</span>

          {(() => {
            if (movie.Type === "movie") {
              return (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z"
                    clipRule="evenodd"
                  />
                </svg>
              );
            } else if (movie.Type === "series") {
              return (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                    clipRule="evenodd"
                  />
                </svg>
              );
            } else if (movie.Type === "game") {
              return (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                </svg>
              );
            }
          })()}
        </p>
      </div>
    </div>
  );
};

export default MovieCardComponent;
