import Flask  from "../assets/FlaskFull.svg"
import { useState, useEffect } from "react"
import { createSolution } from "../api/SolutionAPI"
import { getUserData } from "../api/SolutionAPI"
import DeleteSolutionPage from "../pages/DeleteSolutionPage"
import { Link } from "react-router-dom"

// needs to take in the single solution object as a prop
const CreateEditSolution = ({solution}) => {

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
    createSolution(solutionObj)
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
          <input 
            type='text' 
            name='title' 
            placeholder="Enter a Title" 
            onChange={handleChange}
            defaultValue={solution.title || ''}
          />
          <input 
            type='number' 
            name='source_conc' 
            placeholder="Source concentration"
            step="0.001" 
            onChange={handleChange}
            defaultValue={solution.source_conc|| ''}
          />
          <input 
            type='number' 
            name='source_vol' 
            placeholder={solution.source_vol}
            step="0.001" 
            onChange={handleChange}
            disabled defaultValue={solution.source_vol || ''}
            value={sourceVol}
            // defaultValue={solution.source_vol || ''}
          />
          <input 
            type='decimal' 
            name='final_conc' 
            placeholder="Final concentration" 
            step="0.001" 
            onChange={handleChange}
            defaultValue={solution.final_conc || ''}
          />
          <input 
            type='number' 
            name='final_vol' 
            placeholder="Final volume"
            step="0.001" 
            onChange={handleChange}
            defaultValue={solution.final_vol || ''}
          />
          <button className="submitBtn" type='submit'>Save {<img src={Flask} alt="Flask Icon" />}</button>
          <input 
            type='text' 
            name='instructions' 
            placeholder="Instructions show here" 
            // value={`Pour ${sourceVol} of source volume into ${remainderVol} solvent`}
            defaultValue={solution.instructions || ''} 
          />
        </form>
        <button><Link to={`/solution/${solution.id}/delete`}>DELETE</Link></button>
      </div>
  )
}

export default CreateEditSolution