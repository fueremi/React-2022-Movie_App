import Router from "./routes";
import { NavbarComponent } from "./components";
import { useState } from "react";

const App = () => {
  const [searchValue, setsearchValue] = useState("");
  const [isMovieDetailPage, setIsMovieDetailPage] = useState(false);

  return (
    <div className="max-w-6xl mx-auto min-h-screen">
      <NavbarComponent
        searchValue={searchValue}
        setsearchValue={setsearchValue}
        isMovieDetailPage={isMovieDetailPage}
      />
      <Router setIsMovieDetailPage={setIsMovieDetailPage} />
    </div>
  );
};

export default App;
