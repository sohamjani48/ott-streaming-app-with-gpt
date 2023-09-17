import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/consts";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SeconaryContainer from "./SeconaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SeconaryContainer />
    </div>
  );
};

export default Browse;
