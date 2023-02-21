import Flask  from "../assets/FlaskFull.svg"
import { useState, useEffect } from "react"
import { createSolution } from "../api/SolutionAPI"
import { getUserData } from "../api/SolutionAPI"

// each solution needs a title, measurements, and resulting instructions
const CreateSolutionPage = () => {
  
  const [inputs, setInputs] = useState({
    title: "",
    source_conc: 0,
    final_conc: 0,
    final_vol: 0,
    instructions: ""
  })
  const [sourceVol, setsourceVol] = useState()
  const [remainderVol, setRemainderVol] = useState()

  useEffect(() => {
    setsourceVol(inputs.final_conc * inputs.final_vol / inputs.source_conc)
  }, [inputs.final_conc, inputs.final_vol, inputs.source_conc])
  
  useEffect(() => {
    setRemainderVol(inputs.final_vol - sourceVol)
  }, [inputs.final_vol, sourceVol])


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
          <h2>The CreateSolutionPage</h2>
          <p>{sourceVol}</p>
          <form onSubmit={handleSubmit}>
            <input type='text' name='title' placeholder="Enter a Title" onChange={handleChange}/>
            <input type='number' name='source_conc' placeholder="Source concentration"step="0.00
            1" onChange={handleChange}/>
            <input type='number' name='source_vol' placeholder="Source volume needed"step="0.00
            1" disabled value={sourceVol}/>
            <input type='number' name='final_conc' placeholder="Final concentration"step="0.00
            1" onChange={handleChange}/>
            <input type='number' name='final_vol' placeholder="Final volume"step="0.00
            1" onChange={handleChange}/>
            <button className="submitBtn" type='submit'>Save {<img src={Flask} alt="Flask Icon" />}</button>
            <input type='text' name='instructions' placeholder="Instructions show here" value={
              `Pour ${sourceVol} of source volume into ${remainderVol} solvent`
              } />
          </form>
    
      </div>
  )
}

export default CreateSolutionPage