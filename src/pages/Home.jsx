import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/actionCreates";
import { MovieListComponent } from "../components";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  const [hasMore, setHasMore] = useState(true);

  let { listMovie, searchValue, page, totalResults } = useSelector(
    (state) => state.movies
  );
  const dispatch = useDispatch();
  const { fetchMovies, updatePage } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    updatePage(1);
    fetchMovies(searchValue, page, false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const fetchMoreMovies = () => {
    if (listMovie.length >= totalResults) {
      setHasMore(false);
      return;
    }
    let newPage = page + 1;
    updatePage(newPage);
    fetchMovies(searchValue, newPage, true);
  };

  return (
    <div className="mt-16">
      <InfiniteScroll
        dataLength={listMovie.length}
        next={fetchMoreMovies}
        hasMore={hasMore}
        loader={<h4 className="text-4xl text-center mb-10">Loading...</h4>}
        endMessage={
          <h4 className="text-center text-4xl font-bold mb-10">
            ☺️ No More Data!
          </h4>
        }
      >
        <MovieListComponent movies={listMovie} />
      </InfiniteScroll>
    </div>
  );
};

export default Home;
