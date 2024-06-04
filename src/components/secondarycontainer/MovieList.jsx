import React from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  return (
    <div className="">
      <h1 className="text-white font-semibold text-[1.4rem] mx-[6rem]">
        {title}
      </h1>
      <div className="flex overflow-x-scroll hide-x-scrollbar ">
        <div className="flex gap-4 mx-[6rem] my-[1rem]">
          {movies &&
            movies.map((item, id) => (
              <MovieCard key={id} posterPath={item.poster_path}></MovieCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
