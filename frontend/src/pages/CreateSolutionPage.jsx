import Flask  from "../assets/FlaskFull.svg"
import { useState } from "react"

// each solution needs a title, measurements, and resulting instructions
const CreateSolutionPage = () => {
  
  const [sourceConc, setSourceConc] = useState()
  // grab values from the form, calc with helper function, change val of source_vol and instructions
  const handleSubmit = (event) => {
    event.preventDefault()

    

    let solutionObj = {
      "source_conc": event.target.source_conc.value,
      "final_conc": event.target.final_conc.value,
      "final_vol": event.target.final_vol.value,
      "title": event.target.title.value,
      "instructions": event.target.instructions.value,
    }

    // formulate(solutionObj.source_conc, solutionObj.final_col, solutionObj.final_conc)

  }

  // goal is to have form be display flexed with labels, nice big submit button
  return (
      <div>
          <h2>The CreateSolutionPage</h2>
          <form onSubmit={handleSubmit}>
            <input type='text' name='title' placeholder="Enter a Title" />
            <input type='number' name='source_conc' placeholder="Source concentration" />
            <input type='number' name='source_vol' placeholder="Source volume needed" disabled/>
            <input type='number' name='final_conc' placeholder="Final concentration" />
            <input type='number' name='final_vol' placeholder="Final volume" />
            <button className="submitBtn" type='submit'>Save {<img src={Flask} alt="Flask Icon" />}</button>
            <input type='text' name='instructions' placeholder="Instructions show here"/>
          </form>
    
      </div>
  )
}

export default CreateSolutionPage