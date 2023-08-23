import Flask  from "../assets/FlaskFull.svg"
import Alert from 'react-bootstrap/Alert';
import { useState, useEffect } from "react"
import AuthContext from '../context/AuthContext';
import { useContext } from 'react';
import { createSolution } from "../api/SolutionAPI"
import { useNavigate } from "react-router-dom"
import PopupFraction from "./PopupFraction"

// needs to take in the single solution object as a prop
const CreateSolution = () => {
  let {user, authTokens} = useContext(AuthContext)
  const navigate = useNavigate()
  const userID = localStorage.getItem('userID')
  const [inputs, setInputs] = useState({
    source_conc: 0,
    final_conc: 0,
    final_vol: 0,
    units: "",
  })
  const [sourceVol, setsourceVol] = useState(0)
  const [remainderVol, setRemainderVol] = useState(0)
  const [instructions, setInstructions] = useState(`Pour 0  of source volume into 0 of solvent`)
  const [error, setError] = useState(null)

  // switching input for decimal and fractions
  const [fractionPopup, setFractionPopup] = useState()

  // need new state for the fractions numerator and denominator
  const [ numerator, setNumerator ] = useState(0)
  const [ denominator, setDenominator ] = useState(0)

  // calculate needed solute volume in realtime
  useEffect(() => {
    setsourceVol(inputs.final_conc * inputs.final_vol / inputs.source_conc)
  }, [inputs.final_conc, inputs.final_vol, inputs.source_conc])
  
  // give the remainder volume needed to reach final volume in realtime
  useEffect(() => {
    setRemainderVol(inputs.final_vol - sourceVol)
  }, [inputs.final_vol, sourceVol])

  // create the instructions text
  useEffect(() => {
    isNaN(sourceVol) || isNaN(remainderVol) 
    ? setInstructions(`Pour 0 ${inputs.units} of source volume into 0 ${inputs.units} of solvent`)
    : setInstructions(`Pour ${String(sourceVol)} ${inputs.units} of source volume into ${String(remainderVol)} ${inputs.units} of solvent`)
    
  }, [sourceVol, remainderVol, inputs.units])

  // handles updating specific state within inputs dictionary
  const updateInputs = (key, value) => {
    setInputs(prevState => ({
      ...prevState, [key]: value
    }))
  }

  // handleSubmit makes the POST request
  const handleSubmit = async (event) => {
    event.preventDefault()
      let solutionObj = {
      "units" : event.target.units.value,
      "source_conc": event.target.source_conc.value,
      "source_vol": event.target.source_vol.value,
      "final_conc": event.target.final_conc.value,
      "final_vol": event.target.final_vol.value,
      "title": event.target.title.value,
      "instructions": event.target.instructions.value,
      "creator": userID
    }
    
    const result = await createSolution(authTokens.access, solutionObj)
    if (result === null) {
      setError("Error creating solution")
    } else {
      navigate('/solution_list')
    }

  }
  // update formula parameters in a react way
  const handleChange = (event) => {
    setInputs((prevState) => ({
      ...prevState, [event.target.name]: event.target.value
    }))
  }

  // goal is to have form be display flexed with labels, nice big submit button
  return (
      <div className="general-box">
        {error && <Alert key="danger" variant="danger">{error}</Alert>}
        <h2>Create A Solution</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor='title'>Title</label>
          <input 
            type='text' 
            name='title' 
            placeholder="Enter a Title" 
            onChange={handleChange}
            required
          />
          <p>Unit of Measure</p>
          <div className="radio-btns">
            <div>
              <input 
                type='radio' 
                name='units'
                value='µL'
                onChange={handleChange}
                
              /> &#181;L
            </div>
            <div>
              <input 
                type='radio' 
                name='units'
                value='mL'
                onChange={handleChange}
                
              /> mL
            </div>
            <div>
              <input 
                type='radio' 
                name='units'
                value='L'
                onChange={handleChange}
                required
              /> L
            </div>

          </div>
          <label htmlFor='source_conc'>Source Concentration</label>
          <input 
            type='number' 
            name='source_conc' 
            placeholder="Source concentration"
            step="0.01"
            onChange={handleChange}
            required
          />
          <label htmlFor='source_vol'>Source Volume</label>
          <input 
            type='number' 
            name='source_vol' 
            placeholder="Source Volume"
            step="0.001" 
            onChange={handleChange}
            disabled value={String(sourceVol)}
          />
          <label htmlFor='final_conc'>Final Concentration</label>
          <div className="final-conc-elements">
            <input 
              type='number' 
              name='final_conc' 
              placeholder="Final concentration" 
              step="any" 
              onChange={handleChange}
              value={inputs.final_conc}
              required
            />
            {/* I want this button to make a popup to enter a fraction as component*/}
            {/* do I even need to pass anything to setFractionPopup? */}
            <button className="whiteBtn" type="button" onClick={() => setFractionPopup("15")}>Enter as Fraction</button>
            
          </div>
         
          <label htmlFor='final_vol'>Final Volume</label>
          <input 
            type='number' 
            name='final_vol' 
            placeholder="Final volume"
            onChange={handleChange}
            required
          />
          <br />
          <textarea
            className="instructions-text"
            type='text' 
            name='instructions' 
            placeholder="Instructions show here"
            value={instructions}
            rows="2"
            readOnly
          />
          <br />
          <button className="submitBtn" type='submit'>Save Solution{<img src={Flask} alt="Flask Icon" />}</button>
          {/* <label htmlFor='instructions'>Instructions</label> */}
        </form>
        {/* state for fraction inputs needs to be passed here */}
        {fractionPopup 
        && 
        <PopupFraction 
          popup={fractionPopup} 
          setTrigger={setFractionPopup}
          setNumerator={setNumerator}
          setDenominator={setDenominator}
          updateInputs={updateInputs}
          numerator={numerator}
          denominator={denominator}
        />}
      </div>
  )
}

export default CreateSolution