import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { API_OPTIONS } from "../utils/consts";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const fetchUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const response = await data.json();
    dispatch(addUpcomingMovies(response.results));
  };

  useEffect(() => {
    fetchUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
