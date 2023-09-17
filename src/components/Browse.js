import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { API_OPTIONS } from "../utils/consts";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SeconaryContainer from "./SeconaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <style>
        {`
          body, html {
            margin: 0;
            padding: 0;
          }
        `}
      </style>
      <Header />
      <MainContainer />
      <SeconaryContainer />
    </div>
  );
};

export default Browse;
