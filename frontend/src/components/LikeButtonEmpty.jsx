import { fetchLikesbySolution } from "../api/SolutionAPI";
import { useState, useEffect } from "react";
import ThumbsUp from "../assets/ThumbsUp.svg"
import ThumbsUpSelected from '../assets/ThumbsUpSelected.svg'
import './LikeButtonEmpty.css'

// should take in a boolean (liked or not) and allow you to just set a like for that user
// if user did not like (prop) allow button, otherwise just show the image
const LikeButtonEmpty = ({setIsLiked}) => {

  // the click needs to make the api call
  const handleClick = () => {
    setIsLiked(true)
  }

  useEffect(() => {
    
  }, [])

  // if (!likes) {return <span><img src={ThumbsUp} alt="thumbs up"/></span>}

  return (
    <div>
      <button className='likes' onClick={handleClick}><img src={ThumbsUpSelected} alt='likes img'></img></button>
    </div>
  );
  
}

export default LikeButtonEmpty