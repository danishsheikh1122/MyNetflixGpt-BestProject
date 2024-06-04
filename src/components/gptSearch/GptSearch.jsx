import React from "react";
import GptMovieContainer from "../gptMovieContainre/GptMovieContainer.jsx";
import GptSearchBar from "./GptSearchBar.jsx";
const GptSearch = () => {
  return (
    <div className=" bg-black w-full min-h-[100vh] px-[5rem] pt-[6rem]">
      <GptSearchBar></GptSearchBar>
      <GptMovieContainer></GptMovieContainer>
    </div>
  );
};

export default GptSearch;
