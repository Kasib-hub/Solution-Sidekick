import Flask  from "../assets/FlaskFull.svg"
import { useState, useEffect } from "react"
import { createSolution } from "../api/SolutionAPI"
import { getUserData } from "../api/SolutionAPI"
import EditSolution from "../components/EditSolution"

// // each solution needs a title, measurements, and resulting instructions
const CreateSolutionPage = () => {

  // goal is to have form be display flexed with labels, nice big submit button
  return (
    // pass empty object to satisfy conditional to switch form to empty
      <EditSolution solution={{}}/>

  )
}

export default CreateSolutionPage