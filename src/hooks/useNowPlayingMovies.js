import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { API_OPTIONS } from "../utils/consts";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const fetchNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const response = await data.json();
    dispatch(addNowPlayingMovies(response.results));
  };

  useEffect(() => {
    !nowPlayingMovies && fetchNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
