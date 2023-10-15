import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { API_OPTIONS, BACKGROUND_IMAGE_URL } from "../utils/consts";
import { addSearchResults } from "../utils/gptSlice";
import { lang } from "../utils/languageConstants";
import openai from "../utils/openai";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const language = useSelector((store) => store.config.lang);
  const searchText = useRef();

  const searchMovieInTMDB = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=true&language=en-US&page=1",
      API_OPTIONS
    );
    const response = await data.json();
    return response?.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma seperated. for example: Welcome, Funny Man, Don 2, Superman Returns, The Good The Bad and The Ugly, ...";

    try {
      const results = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });

      if (!results.choices) {
        alert("Got no responnse for the request.");
      }

      const resultMovies = results.choices[0]?.message?.content?.split(",");

      const promiseArr = resultMovies.map((movie) => searchMovieInTMDB(movie));

      const tmdbResults = await Promise.all(promiseArr);

      dispatch(
        addSearchResults({ movies: tmdbResults, movieNames: resultMovies })
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="pt-[15%] flex justify-center">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
      ></div>
      <form
        className=" w-full md:w-1/2 bg-black grid grid-cols-12 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className=" col-span-9 px-4 py-2 m-4 rounded-md "
          placeholder={lang[language].gptSearchPlaceholder}
        />
        <button
          className=" col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
