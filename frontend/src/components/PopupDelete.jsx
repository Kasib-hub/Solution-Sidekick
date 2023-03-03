import { deleteCommentbyId } from "../api/SolutionAPI"

const PopupDelete = ({comment, setTrigger, updateComments}) => {

  // make api call to delete this comment

  const handleDeleteClick = () => {
    deleteCommentbyId(comment.solution, comment.id)
    setTimeout(() => {
      updateComments()
    }, 250)
    setTrigger(false)
  }

  const handleBackClick = () => {
    setTrigger(false)
  }

  return (comment) ? (
    <div className="popup">
      <div className="popup-box">
        <p>Are you sure you want to delete your comment? {comment.message}</p>
        <button onClick={handleDeleteClick}>Yes, Delete</button>
        <button onClick={handleBackClick}>No, Go Back</button>
      </div>

    </div> 
  ) : ""
}

export default PopupDelete