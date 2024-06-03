import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <>
      <h1 className="w-1/2 h-[4rem] justify-start items-center text-[2rem]">{title}</h1>
      <p className="w-1/3 h-[10rem] my-[1rem] justify-start items-center text-[0.9rem]" >{overview}</p>
      <div className="my-[2rem]">
        <button className="text-white rounded bg-slate-400 opacity-80 w-[4rem] h-[2rem]">Play</button>
        <button className="text-white rounded mx-[1rem] bg-slate-400 opacity-70 w-[6rem] h-[2rem]">More Info</button>
      </div>
    </>
  );
};

export default VideoTitle;
