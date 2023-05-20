
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
        <p>Enter Final Concentration as a Fraction</p>
        <form>
          <input type="number" name="numerator" placeholder="Numerator" />
          <span> / </span>
          <input type="number" name="denominator" placeholder="Denominator" />
        </form>
        <div className="prompt-comment">
          <button className="submitBtn" onClick={handleBackClick}>No, Go Back</button>
          <button className="deleteBtn" onClick={handleFractionClick}>Yes, Delete</button>
        </div>

      </div>

    </div> 
  ) : ""
}

export default PopupFraction