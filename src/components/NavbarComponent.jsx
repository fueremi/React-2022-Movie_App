import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/actionCreates";

const NavbarComponent = (props) => {
  const dispatch = useDispatch();
  const { updateSearchValue } = bindActionCreators(actionCreators, dispatch);

  const handleOnChange = (e) => {
    updateSearchValue(e.target.value);
  };
  return (
    <div className=" py-4 bg-slate-800 w-screen text-slate-200 fixed top-0 left-0 z-30">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Movies App</h1>
        <input
          className="m-0 shadow appearance-none border rounded w-2/6 xl:w-1/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="search"
          type="text"
          value={props.value}
          onChange={handleOnChange}
          placeholder="Search movies ..."
          onClick={(e) => (e.target.value = "")}
        ></input>
      </div>
    </div>
  );
};

export default NavbarComponent;
