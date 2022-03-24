import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movies/:id" element={<MovieDetail />} />
    </Routes>
  );
};

export default Router;
