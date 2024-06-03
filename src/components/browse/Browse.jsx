import React, { useEffect } from "react";
import Header from "../hearder/Header.jsx"
import { API_OPTIONS } from "../../utils/constants.jsx";
import { useDispatch } from "react-redux";
import {addMovie} from "../../utils/movieSlicejsx";
import MainContainerForBrowse from "../maincontainer/MainContainerForBrowse.jsx"
import SecondaryContainerForBrowse from "../secondarycontainer/SecondaryContainerForBrowse.jsx"
const Browse = () => {
  const dispatch = useDispatch();

  const fetchMovieData = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=ad65957b04a08f573a9efe3491eb7010",
        API_OPTIONS
      );
      const res = await data.json();
      dispatch(addMovie(res.results)); // Dispatch the addMovie action with the movie data
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  useEffect(() => {
    fetchMovieData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div>
      <Header />
      <MainContainerForBrowse />
      <SecondaryContainerForBrowse />
    </div>
  );
};

export default Browse;
