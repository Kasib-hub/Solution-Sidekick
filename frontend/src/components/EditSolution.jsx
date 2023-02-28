import Flask  from "../assets/FlaskFull.svg"
import { useState, useEffect } from "react"
import { putSolutionbyId } from "../api/SolutionAPI"
import { useNavigate } from "react-router-dom"

// needs to take in the single solution object as a prop
const EditSolution = ({solution}) => {
  
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    source_conc: solution.source_conc,
    final_conc: solution.final_conc,
    final_vol: solution.final_vol
  })
  const [sourceVol, setsourceVol] = useState(solution.source_vol)
  const [remainderVol, setRemainderVol] = useState(0)
  const [instructions, setInstructions] = useState(solution.instructions)

  // calculate needed solute volume in realtime
  useEffect(() => {
    setsourceVol(inputs.final_conc * inputs.final_vol / inputs.source_conc)
  }, [inputs.final_conc, inputs.final_vol, inputs.source_conc])
  
  // give the remainder volume needed to reach final volume in realtime
  useEffect(() => {
    setRemainderVol(inputs.final_vol - sourceVol)
  }, [inputs.final_vol, sourceVol])

  // create the instructions text but check for NaN values
  useEffect(() => {
    isNaN(sourceVol) || isNaN(remainderVol) 
    ? setInstructions(solution.instructions)
    : setInstructions(`Pour ${String(sourceVol)} of source volume into ${String(remainderVol)} of solvent`)
    
  }, [sourceVol, remainderVol])


  // handleSubmit makes the POST request
  const handleSubmit = (event) => {
    event.preventDefault()
    let solutionObj = {
      "source_conc": event.target.source_conc.value,
      "source_vol": event.target.source_vol.value,
      "final_conc": event.target.final_conc.value,
      "final_vol": event.target.final_vol.value,
      "title": event.target.title.value,
      "instructions": event.target.instructions.value,
      "creator": solution.creator
    }
    putSolutionbyId(solution.id, solutionObj)
    navigate('/solution_list')
  }
  // update formula parameters in a react way
  const handleChange = (event) => {
    setInputs((prevState) => ({
      ...prevState, [event.target.name]: event.target.value
    }))
  }

  // goal is to have form be display flexed with labels, nice big submit button
  return (
      <div>
        <h2>EDIT A Solution</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor='title'>Title</label>
          <input 
            type='text' 
            name='title' 
            placeholder="Enter a Title" 
            onChange={handleChange}
            value={solution.title}
          />
          <label htmlFor='source_conc'>Source Concentration</label>
          <input 
            type='number' 
            name='source_conc' 
            placeholder="Source concentration"
            step="0.001"
            onChange={handleChange}
            value={inputs.source_conc}
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
          <input 
            type='decimal' 
            name='final_conc' 
            placeholder="Final concentration" 
            step="0.001" 
            onChange={handleChange}
            value={inputs.final_conc}
          />
          <label htmlFor='final_vol'>Final Volume</label>
          <input 
            type='number' 
            name='final_vol' 
            placeholder="Final volume"
            step="0.001" 
            onChange={handleChange}
            value={inputs.final_vol}
          />
          <button className="submitBtn" type='submit'>Save {<img src={Flask} alt="Flask Icon" />}</button>
          <label htmlFor='instructions'>Instructions</label>
          <input 
            type='text' 
            name='instructions' 
            placeholder="Instructions show here"
            value={instructions}
            readOnly
          />
        </form>
        
      </div>
  )
}

export default EditSolution