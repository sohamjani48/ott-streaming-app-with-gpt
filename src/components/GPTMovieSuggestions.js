import React from "react";
import { useSelector } from "react-redux";

import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const searchMovieNames = useSelector((store) => store.gpt.searchMovieNames);
  const searchedMovies = useSelector((store) => store.gpt.searchMovies);

  if (!searchedMovies) return null;

  return (
    <div className="p-4 m-4 bg-black text-white">
      {searchMovieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={searchedMovies[index]}
        />
      ))}
    </div>
  );
};

export default GPTMovieSuggestions;
