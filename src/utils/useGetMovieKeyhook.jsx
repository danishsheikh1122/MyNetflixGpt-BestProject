import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants.jsx";

const useGetMovieKeyhook = (id) => {
  const fetchMoveData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=ad65957b04a08f573a9efe3491eb7010`,
      API_OPTIONS
    );
    const data = await response.json();
    const trailers = data.results.filter((video) => video.type === "Trailer");
    const key = trailers.length > 0 ? trailers[0].key : null;
    return key;
  };

  useEffect(() => {
    fetchMoveData();
  }, [id]); // Add id to the dependency array
};

export default useGetMovieKeyhook;
