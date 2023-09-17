import React from "react";

import { IMG_CDN_URL } from "../utils/consts";

const MovieCard = ({ movie }) => {
  console.log("movies is", movie);
  const { poster_path, original_title } = movie;
  return (
    <div className="w-48 pr-4">
      <img alt={original_title} src={IMG_CDN_URL + poster_path} />
    </div>
  );
};

export default MovieCard;
