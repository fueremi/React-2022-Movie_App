import MovieCardComponent from "./MovieCardComponent";

const MovieList = ({ movies }) => {
  return (
    <div className="sm:flex sm:flex-wrap sm:gap-8 justify-center py-8">
      {movies.map((movie, index) => (
        <MovieCardComponent movie={movie} key={index} />
      ))}
    </div>
  );
};

export default MovieList;
