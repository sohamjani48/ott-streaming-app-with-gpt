import React from "react";

import { IMG_CDN_URL } from "../utils/consts";

const MovieCard = ({ movie }) => {
  const { poster_path, original_title } = movie;
  if (!poster_path) return null;
  return (
    <div className="w-48 pr-4">
      <img alt={original_title} src={IMG_CDN_URL + poster_path} />
    </div>
  );
};

export default MovieCard;
