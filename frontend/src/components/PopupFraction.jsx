

const PopupFraction = ({comment, setTrigger, updateComments}) => {

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
        <p>Are you sure you want to delete your comment?</p>
        <div className="prompt-comment">
          <button className="submitBtn" onClick={handleBackClick}>No, Go Back</button>
          <button className="deleteBtn" onClick={handleDeleteClick}>Yes, Delete</button>
        </div>

      </div>

    </div> 
  ) : ""
}

export default PopupFraction