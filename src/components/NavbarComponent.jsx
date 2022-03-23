import React from "react";

const NavbarComponent = (props) => {
  return (
    <div className="flex justify-between items-center pt-6">
      <h1 className="text-3xl font-bold">Movies App</h1>
      <input
        className="m-0 shadow appearance-none border rounded w-2/6 xl:w-1/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="search"
        type="text"
        value={props.value}
        onChange={(e) => props.setSearchValue(e.target.value)}
        placeholder="Search movies ..."
      ></input>
    </div>
  );
};

export default NavbarComponent;
