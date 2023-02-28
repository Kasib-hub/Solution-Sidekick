import { useState, useEffect } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import { fetchSolutionbyId } from '../api/SolutionAPI'
import EditSolution from '../components/EditSolution'

const SolutionEditPage = () => {
  const userID = Number(localStorage.getItem('userID'))
  const navigate = useNavigate()
  let {solutionID} = useParams()

  const [solution, setSolution] = useState()

  // make call to fetch by id
  useEffect(() => {
    fetchSolutionbyId(solutionID).then(data => setSolution(data))
  }, [])

  if (!solution) {return <h2>Loading...</h2>}

  else if (userID !== solution.creator) {
    alert('Error: you do not have permission to modify solution')
    navigate('/solution_list')
  }

  return (
    <div>
      <EditSolution solution={solution} />
    </div>
  )

}

export default SolutionEditPage