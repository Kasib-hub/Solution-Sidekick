import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { fetchSolutionbyId } from '../api/SolutionAPI'

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
      <h3>Edit {solution.title}</h3>
      <form>
        <input type="number" name="" id="" placeholder="C1"/>
      </form>
    </div>
    
  )

}

export default SolutionEditPage