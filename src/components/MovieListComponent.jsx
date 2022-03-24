import MovieCardComponent from "./MovieCardComponent";

const MovieList = ({ movies }) => {
  return (
    <div className="px-16">
      {movies.map((movie, index) => (
        <MovieCardComponent movie={movie} key={index} />
      ))}
    </div>
  );
};

export default MovieList;
