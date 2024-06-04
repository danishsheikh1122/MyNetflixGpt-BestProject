import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle.jsx";
import VideoBg from "./VideoBg.jsx";
const MainContainerForBrowse = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  const {title,overview,id}=mainMovie;
  return (
    <div>
      <VideoBg id={id}></VideoBg>
      <VideoTitle title={title} overview={overview}></VideoTitle>
    </div>
  );
};
export default MainContainerForBrowse;
