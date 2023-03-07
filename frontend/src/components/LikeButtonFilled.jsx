import { fetchLikesbySolution } from "../api/SolutionAPI";
import { useState, useEffect } from "react";
import ThumbsUp from "../assets/ThumbsUp.svg"
import './LikeButtonFilled.css'

// should take in a boolean (liked or not) and allow you to just set a like for that user
// if user did not like (prop) allow button, otherwise just show the image
const LikeButtonFilled = ({setIsLiked}) => {

  const handleClick = () => {
    setIsLiked(true)
  }

  useEffect(() => {
    
  }, [])

  // if (!likes) {return <span><img src={ThumbsUp} alt="thumbs up"/></span>}

  return (
    <div>
      <button className="likes-filled"><img src={ThumbsUp} alt='likes img'></img></button>
    </div>
  );
  
}

export default LikeButtonFilled