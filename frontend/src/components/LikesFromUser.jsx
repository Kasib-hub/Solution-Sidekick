import { fetchLikesbySolution } from "../api/SolutionAPI";
import { useState, useEffect } from "react";
import ThumbsUp from "../assets/ThumbsUp.svg"

const LikesFromUser = ({setUserLike, solution, userLike}) => {
  const userID = Number(localStorage.getItem('userID'))
  const [likes, setLikes] = useState()
  

  useEffect(() => {
    fetchLikesbySolution(solution.id).then(data => {
      setUserLike(data.result.filter(likeObj => likeObj.user === userID).length)
    })
  }, [])

  if (userLike) {return <span><img src={ThumbsUp} alt="thumbs up"/></span>}

  return (
    <div>
      <p>you've liked this {userLike}</p>
      <span><img src={ThumbsUp} alt="thumbs up"/></span>
    </div>
  );
  
}

export default LikesFromUser