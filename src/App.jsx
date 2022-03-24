import Router from "./routes";
import { NavbarComponent } from "./components";
import { useState } from "react";

const App = () => {
  const [searchValue, setsearchValue] = useState("");

  return (
    <div className="max-w-6xl mx-auto min-h-screen">
      <NavbarComponent
        searchValue={searchValue}
        setsearchValue={setsearchValue}
      />
      <Router />
    </div>
  );
};

export default App;
