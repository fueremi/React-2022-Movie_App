import MovieCardComponent from "./MovieCardComponent";

const MovieList = ({ movies }) => {
  return (
    <div className="sm:flex sm:flex-wrap sm:gap-8 justify-center py-8">
      {movies.map((movie) => (
        <MovieCardComponent movie={movie} key={movie.imdbID} />
      ))}
    </div>
  );
};

export default MovieList;
