import React from 'react'
import {IMG_CDN} from "../../utils/constants.jsx";

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-44 cursor-pointer hover:opacity-90'>
      <img src={IMG_CDN+posterPath} alt="image not found" className='rounded-xl' />
    </div>
  )
}

export default MovieCard
