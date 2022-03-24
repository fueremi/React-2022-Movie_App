import { Route, Routes } from "react-router-dom";
import { Home, MovieDetail } from "../pages";

const Router = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/movies/:id"
        element={
          <MovieDetail setIsMovieDetailPage={props.setIsMovieDetailPage} />
        }
      />
    </Routes>
  );
};

export default Router;
