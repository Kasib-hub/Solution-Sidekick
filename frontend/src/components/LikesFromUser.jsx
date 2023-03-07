import { fetchLikesbySolution } from "../api/SolutionAPI";
import { useState, useEffect } from "react";
import LikeButtonEmpty from "./LikeButtonEmpty";
import LikeButtonFilled from "./LikeButtonFilled";

const LikesFromUser = ({setUserLike, solution, userLike}) => {
  
  const userID = Number(localStorage.getItem('userID'))
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    fetchLikesbySolution(solution.id).then(data => {
      setUserLike(data.result.filter(likeObj => likeObj.user === userID).length)
    })
  }, [])

  if (userLike > 0 || isLiked) {return <LikeButtonFilled />}

  return (
    <div>
      <LikeButtonEmpty setIsLiked={setIsLiked}/>
    </div>
  );
  
}

export default LikesFromUser