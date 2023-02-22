import CreateEditSolution from "../components/CreateEditSolution"

// // each solution needs a title, measurements, and resulting instructions
const CreateSolutionPage = () => {

  // goal is to have form be display flexed with labels, nice big submit button
  return (
    // pass empty object to satisfy conditional to switch form to empty
      <CreateEditSolution solution={{}}/>
  )
}

export default CreateSolutionPage