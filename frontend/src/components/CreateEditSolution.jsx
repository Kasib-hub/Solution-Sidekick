import Flask  from "../assets/FlaskFull.svg"
import { useState, useEffect } from "react"
import { createSolution, putSolutionbyId } from "../api/SolutionAPI"
import { getUserData } from "../api/SolutionAPI"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

// needs to take in the single solution object as a prop
const CreateEditSolution = ({solution}) => {
  
  const navigate = useNavigate()
  
  const [inputs, setInputs] = useState({
    title: "",
    source_conc: 0,
    final_conc: 0,
    final_vol: 0,
    instructions: ""
  })
  const [sourceVol, setsourceVol] = useState()
  const [remainderVol, setRemainderVol] = useState()
  const [userID ,setUserID] = useState()

  // calculate needed solute volume in realtime
  useEffect(() => {
    setsourceVol(inputs.final_conc * inputs.final_vol / inputs.source_conc)
  }, [inputs.final_conc, inputs.final_vol, inputs.source_conc])
  
  // give the remainder volume needed to reach final volume in realtime
  useEffect(() => {
    setRemainderVol(inputs.final_vol - sourceVol)
  }, [inputs.final_vol, sourceVol])

  // retreive user id to make the post request
  useEffect(() => {
    getUserData().then(data => setUserID(data.user_id))
  }, [])

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
      "creator": userID
    }
    solution.title ? putSolutionbyId(solution.id, solutionObj) : createSolution(solutionObj)
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
        {userID && <p>{userID}</p>}
        {solution.title ? <h2>Edit Solution</h2> : <h2>Create A Solution</h2>}
        {sourceVol > 0 && <p>{sourceVol}</p>}
        <form onSubmit={handleSubmit}>
          <label for='title'>Title</label>
          <input 
            type='text' 
            name='title' 
            placeholder="Enter a Title" 
            onChange={handleChange}
            defaultValue={solution.title || ''}
          />
          <label for='source_conc'>Source Concentration</label>
          <input 
            type='number' 
            name='source_conc' 
            placeholder="Source concentration"
            step="any" 
            onChange={handleChange}
            defaultValue={solution.source_conc|| ''}
          />
          <label for='source_vol'>Source Volume</label>
          <input 
            type='number' 
            name='source_vol' 
            placeholder={solution.source_vol}
            step="any" 
            onChange={handleChange}
            disabled defaultValue={solution.source_vol || ''}
            value={sourceVol || solution.source_vol}
            // defaultValue={solution.source_vol || ''}
          />
          <label for='final_conc'>Final Concentration</label>
          <input 
            type='decimal' 
            name='final_conc' 
            placeholder="Final concentration" 
            step="any" 
            onChange={handleChange}
            defaultValue={solution.final_conc || ''}
          />
          <label for='final_vol'>Final Volume</label>
          <input 
            type='number' 
            name='final_vol' 
            placeholder="Final volume"
            step="any" 
            onChange={handleChange}
            defaultValue={solution.final_vol || ''}
          />
          <button className="submitBtn" type='submit'>Save {<img src={Flask} alt="Flask Icon" />}</button>
          <label for='instructions'>Instructions</label>
          <input 
            type='text' 
            name='instructions' 
            placeholder="Instructions show here" 
            disabled defaultValue={solution.instructions || ''} 
            value={solution.instructions || `Pour ${sourceVol} of source volume into ${remainderVol} of solvent`}
          />
        </form>
        
      </div>
  )
}

export default CreateEditSolution