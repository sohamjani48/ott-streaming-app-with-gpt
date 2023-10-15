import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { API_OPTIONS } from "../utils/consts";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  const fetchUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const response = await data.json();
    dispatch(addUpcomingMovies(response.results));
  };

  useEffect(() => {
    !upcomingMovies && fetchUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
