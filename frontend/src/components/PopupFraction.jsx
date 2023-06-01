
// takes in the state for final concentration
const PopupFraction = ({popup, setTrigger, setNumerator, setDenominator, updateInputs, numerator, denominator}) => {

  // make api call to delete this comment

  const handleSubmit = (e) => {
    e.preventDefault()
    updateInputs("final_conc", (numerator / denominator))
    console.log(numerator / denominator)
    setTrigger(false)
  }

  const handleBackClick = () => {
    setTrigger(false)
  }

  const handleNumeratorChange = (e) => {
    setNumerator(e.target.value)
  }

  const handleDenominatorChange = (e) => {
    setDenominator(e.target.value)
  }

  return (popup) ? (
    <div className="popup">
      <form className="popup-box" onSubmit={handleSubmit}>
        <p>Enter Final Concentration as a Fraction</p>
        <div className="fraction-inputs">
          <input type="number" name="numerator" placeholder="Numerator" onChange={handleNumeratorChange} required/>
          <span> / </span>
          <input type="number" name="denominator" placeholder="Denominator" onChange={handleDenominatorChange} required/>
        </div>
        <div className="prompt-comment">
          <button className="submitBtn" type="submit">Confirm</button>
          <button className="deleteBtn" onClick={handleBackClick}>Go Back</button>
        </div>

      </form>

    </div> 
  ) : ""
}

export default PopupFraction