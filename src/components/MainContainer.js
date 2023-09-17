import React from "react";
import { useSelector } from "react-redux";

import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);

  //this is known as early return
  if (!movies) return;

  const recommendedMovie = movies[0];

  const { original_title, overview, id } = recommendedMovie;

  return (
    <div className=" overflow-hidden">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
