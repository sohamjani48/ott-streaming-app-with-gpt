import React from "react";
import { useSelector } from "react-redux";

import { BACKGROUND_IMAGE_URL } from "../utils/consts";
import { lang } from "../utils/languageConstants";

const GPTSearchBar = () => {
  const language = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[20%] flex justify-center">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
      ></div>
      <form className=" w-1/2 bg-black grid grid-cols-12 rounded-md">
        <input
          type="text"
          className=" col-span-9 px-4 py-2 m-4 rounded-md"
          placeholder={lang[language].gptSearchPlaceholder}
        />
        <button className=" col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
