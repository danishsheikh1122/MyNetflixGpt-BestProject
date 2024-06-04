import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const SecondaryContainerForBrowse = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies.nowPlayingMovies); 
  return (
    <div className="bg-black font-mono -mt-[12rem]">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}></MovieList>
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies}></MovieList>
      <MovieList title={"Popular"} movies={movies.nowPlayingMovies}></MovieList>
      <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies}></MovieList>
    </div>
  );
};

export default SecondaryContainerForBrowse;
