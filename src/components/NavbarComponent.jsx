import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/actionCreates";

const NavbarComponent = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { updateSearchValue } = bindActionCreators(actionCreators, dispatch);

  const handleOnChange = (e) => {
    updateSearchValue(e.target.value);
  };

  const handleOnClick = (e) => {
    e.target.value = "";
    navigate("/");
  };
  return (
    <div className=" py-4 bg-slate-800 w-screen text-slate-200 fixed top-0 left-0 z-30">
      <div className="max-w-6xl px-6 mx-auto flex justify-center sm:justify-between items-center flex-wrap sm:flex-nowrap gap-y-2 sm:gap-x-4">
        <h1 className="text-3xl font-bold sm:w-full text-center sm:text-left">
          <Link to={`/`}>Movies App</Link>
        </h1>
        {!props.isMovieDetailPage && (
          <input
            className="m-0 shadow appearance-none border rounded w-full lg:w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="search"
            type="text"
            value={props.value}
            onChange={handleOnChange}
            placeholder="Search movies ..."
            onClick={handleOnClick}
          ></input>
        )}
      </div>
    </div>
  );
};

export default NavbarComponent;
