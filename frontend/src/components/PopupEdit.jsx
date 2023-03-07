import { putCommentbyId } from "../api/SolutionAPI"
import { useState } from "react"
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
          <textarea name="message" rows="6" cols="60" onChange={handleChange} value={editComment}/>
          <div className="prompt-comment">
            <button className="submitBtn" id="save-icon" type="submit"><img src={FloppyDisk} alt='floppy disk save'/></button>
            <button className="submitBtn" type="button" onClick={handleClick}>Go Back</button>
          </div>

        </form>
      </div>

    </div> 
  ) : ""
}

export default PopupEdit