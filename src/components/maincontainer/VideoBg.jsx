import React, { useEffect,useState } from "react";
import { API_OPTIONS } from "../../utils/constants.jsx";
const VideoBg = ({ id }) => {
  // below code to fetch data we can write it in custom hook but 
  // the problem is it is rendering first and then fetching 
  // refer useGetMoviesKeyhook.jsx all code is written there but we are not geting key here  
  const [trailer,setTrailer]=useState(null)
  const fetchMoveData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=ad65957b04a08f573a9efe3491eb7010`,
      API_OPTIONS
    );
    const data = await response.json();
    // console.log(data);
    const trailers = data.results.filter((video) => video.type === "Trailer");
    const trailer = trailers[0].key;
    setTrailer(trailer)
  };
  useEffect(() => {
    fetchMoveData();
  }, []);
  return (
    <div>
      vidoeo bg
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+trailer}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBg;
