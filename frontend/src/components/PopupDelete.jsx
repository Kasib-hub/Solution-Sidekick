import { createComment } from "../api/SolutionAPI"
import { useState, useEffect } from "react"

const PopupDelete = ({comment, setTrigger}) => {

  // make api call to delete this comment

  const handleClick = () => {
    setTrigger(false)
  }

  return (comment) ? (
    <div className="popup">
      <div className="popup-box">
        <p>Are you sure you want to delete your comment? {comment.message}</p>
        <button onClick={handleClick}>Yes, Delete</button><button onClick={handleClick}>No, Go Back</button>
      </div>

    </div> 
  ) : ""
}

export default PopupDelete