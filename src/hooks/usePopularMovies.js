import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { API_OPTIONS } from "../utils/consts";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const fetchPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const response = await data.json();
    dispatch(addPopularMovies(response.results));
  };

  useEffect(() => {
    !popularMovies && fetchPopularMovies();
  }, []);
};

export default usePopularMovies;
