import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { fetchSolutionbyId } from '../api/SolutionAPI'
import CreateEditSolution from '../components/CreateEditSolution'

const SolutionEditPage = () => {

  let {solutionID} = useParams()

  const [solution, setSolution] = useState()

  // make call to fetch by id
  useEffect(() => {
    fetchSolutionbyId(solutionID).then(data => setSolution(data))
  }, [])

  if (!solution) {return <h2>Loading...</h2>}

  return (
    <div>
      <CreateEditSolution solution={solution} />
    </div>
  )

}

export default SolutionEditPage