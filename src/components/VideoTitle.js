import React from "react";

import { trimText } from "../utils/validate";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen h-full pt-[22%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold ">{title}</h1>
      <p className="py-6 text-md w-1/4 hidden md:inline-block">
        {trimText(overview, 120)}
      </p>
      <div>
        <button
          className="bg-white text-black text-xl px-8 py-2 rounded-lg hover:opacity-70"
          onClick={() => {
            throw new TypeError("Demo test error");
          }}
        >
          Play
        </button>
        <button className="mx-2 bg-gray-500 text-white text-xl px-8 py-2 bg-opacity-50 rounded-lg hover:opacity-70">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
