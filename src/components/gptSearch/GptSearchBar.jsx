import React from "react";
import searchIcon from "../../assets/searchIcon.png";
const GptSearchBar = () => {
  return (
    <div className=" w-full h-[2.5rem] flex justify-center items-center font-mono my-[2rem]">
      <div className="w-[30rem] h-[2.5rem] px-[1rem]  bg-white flex justify-center items-center rounded-xl">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-full bg-white outline-none focus lowercase text-[1.2rem]"
        />
        <img
          src={searchIcon}
          alt="searchIcon"
          className="w-[2rem] h-[2rem] ml-2 "
        />
      </div>
    </div>
  );
};

export default GptSearchBar;
