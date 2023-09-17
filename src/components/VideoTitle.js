import React from "react";

import { trimText } from "../utils/validate";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold ">{title}</h1>
      <p className="py-6 text-lg w-1/4">{trimText(overview, 120)}</p>
      <div className="flex">
        <button className="bg-white text-black text-xl px-8 py-2 rounded-lg hover:opacity-70">
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