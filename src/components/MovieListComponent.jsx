import MovieCardComponent from "./MovieCardComponent";

const MovieList = ({ movies }) => {
  return (
    <div className="px-16 flex flex-column justify-between flex-wrap gap-y-4 lg:gap-y-12">
      {movies.map((movie, index) => (
        <MovieCardComponent movie={movie} key={index} />
      ))}
    </div>
  );
};

export default MovieList;
