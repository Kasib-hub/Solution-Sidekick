import { createComment } from "../api/SolutionAPI"
import { useState, useEffect } from "react"

const PopupDelete = ({trigger, setTrigger}) => {

  const handleClick = () => {
    setTrigger(false)
  }

  return (trigger) ? (
    <div>
     <p>Are you sure you want to delete your comment?</p>
     <button onClick={handleClick}>Yes, Delete</button><button onClick={handleClick}>No, Go Back</button>
    </div> 
  ) : ""
}

export default PopupDelete