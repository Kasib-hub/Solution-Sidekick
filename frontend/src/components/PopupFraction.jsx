
// takes in the state for final concentration
const PopupFraction = ({popup, final_conc, setTrigger}) => {

  // make api call to delete this comment

  const handleFractionClick = () => {
    setTrigger(false)
  }

  const handleBackClick = () => {
    setTrigger(false)
  }

  return (popup) ? (
    <div className="popup">
      <div className="popup-box">
        <p>Are you sure you want to delete your comment?</p>
        <div className="prompt-comment">
          <button className="submitBtn" onClick={handleBackClick}>No, Go Back</button>
          <button className="deleteBtn" onClick={handleFractionClick}>Yes, Delete</button>
        </div>

      </div>

    </div> 
  ) : ""
}

export default PopupFraction