import React from "react";

import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("movies", movies);

  return (
    movies && (
      <div className="px-6 py-2">
        <div className="text-2xl font-semibold py-4 text-white">{title}</div>
        <div className="flex overflow-x-scroll">
          <div className="flex">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
