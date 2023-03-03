import { fetchLikesbySolution } from "../api/SolutionAPI";
import { useState, useEffect } from "react";
import ThumbsUp from "../assets/ThumbsUp.svg"

const LikesOnSolution = ({solution}) => {

  const [likes, setLikes] = useState()

  useEffect(() => {
    fetchLikesbySolution(solution.id).then(data => setLikes(data.result.length))
  }, [])

  if (!likes) {return <span><img src={ThumbsUp} alt="thumbs up"/> 0</span>}

  return (
    <div>
      <span><img src={ThumbsUp} alt="thumbs up"/> {likes}</span>
    </div>
  );
  
}

export default LikesOnSolution