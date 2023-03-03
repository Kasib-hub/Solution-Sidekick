import { putCommentbyId } from "../api/SolutionAPI"
import { useState, useEffect } from "react"
import FloppyDisk from '../assets/FloppyDisk.svg'

const PopupEdit = ({comment, setTrigger, updateComments}) => {

  const [editComment, setEditComment] = useState(comment.message)
  // make api call to edit this comment

  const handleChange = (event) => {
    setEditComment(event.target.value)
  }

  const handleClick = () => {
    setTrigger(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    putCommentbyId(comment.solution, comment.id, {"message": editComment})
    setTimeout(() => {
      updateComments()
    }, 250)
    setTrigger(false)
  }

  return (comment) ? (
    <div className="popup">
      <div className="popup-box">
        <p>Edit Your Comment</p>
        <form onSubmit={handleSubmit}>
          <textarea name="message" onChange={handleChange} value={editComment}/>
          <button type="submit"><img src={FloppyDisk} alt='floppy disk save'/></button>
          <button type="button" onClick={handleClick}>Go Back</button>
        </form>
      </div>

    </div> 
  ) : ""
}

export default PopupEdit