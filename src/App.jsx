import { useState, useEffect } from "react";
import MovieList from "./components/MovieListComponent";
import NavbarComponent from "./components/NavbarComponent";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovies = async (payload) => {
    const API_URL = `https://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}&s=${payload}`;
    const response = await fetch(API_URL);
    const result = await response.json();

    if (result.Search) {
      setMovies(result.Search);
    }
  };

  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);

  return (
    <div className="w-screen h-screen">
      <div className="container mx-auto px-6">
        <NavbarComponent
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
