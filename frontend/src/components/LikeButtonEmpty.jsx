import { useParams } from "react-router-dom";
import ThumbsUpSelected from '../assets/ThumbsUpSelected.svg'
import './LikeButtonEmpty.css'
import { createLike } from "../api/SolutionAPI";

// should take in a boolean (liked or not) and allow you to just set a like for that user
// if user did not like (prop) allow button, otherwise just show the image
const LikeButtonEmpty = ({setIsLiked}) => {

  const {solutionID} = useParams()
  const userID = Number(localStorage.getItem('userID'))
  // the click needs to make the api call
  const handleClick = () => {
    let likeObj = {
      "user": userID,
      "solution": solutionID
    }
    createLike(likeObj, solutionID)
    setIsLiked(true)
  }

  return (
    <div>
      <button className='likes' onClick={handleClick}><img src={ThumbsUpSelected} alt='likes img'></img></button>
    </div>
  );
  
}

export default LikeButtonEmpty