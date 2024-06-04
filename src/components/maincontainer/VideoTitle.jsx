import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    // <div className="absolute w-1/3 top-0 left-0 my-[20rem] px-[5rem] text-white capitalize" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.1))" }}>//to set gradient use this 
    <div className="absolute w-1/3 top-0 left-0 my-[8rem] px-[5rem] text-white capitalize " >{/* without gradient */}
      <h1 className="w-full h-[4rem] justify-start items-center text-[2rem] my-[3rem] font-bold" >{title}</h1>
      <p className="w-full h-[10rem] my-[1rem] justify-start items-center text-[0.9rem] capitalize font-medium" >{overview}</p>
      <div className="my-[3rem]">
        <button className="text-black rounded bg-white opacity-90 w-[4rem] h-[2rem] hover:opacity-80 font-medium">Play</button>
        <button className="text-white rounded mx-[1rem] bg-black opacity-80 w-[6rem] h-[2rem] hover:opacity-70 font-medium">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
