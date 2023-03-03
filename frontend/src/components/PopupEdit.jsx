import { createComment } from "../api/SolutionAPI"
import { useState, useEffect } from "react"
import FloppyDisk from '../assets/FloppyDisk.svg'

const PopupEdit = ({comment, setTrigger}) => {

  // make api call to edit this comment

  const handleClick = () => {
    setTrigger(false)
  }

  return (comment) ? (
    <div className="popup">
      <div className="popup-box">
        <form>
          <p>Edit Your Comment</p>
          <textarea name="message"/>
          <button onClick={handleClick}><img src={FloppyDisk} alt='floppy disk save'/></button>
        </form>
      </div>

    </div> 
  ) : ""
}

export default PopupEdit