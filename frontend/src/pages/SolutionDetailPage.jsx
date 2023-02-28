import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { fetchSolutionbyId } from '../api/SolutionAPI'
import SolutionDetail from '../components/SolutionDetail'


// here is where the api calls will go
const SolutionDetailPage = () => {

  let {solutionID} = useParams()

  const [solution, setSolution] = useState()

  // make call to fetch by id
  useEffect(() => {
    fetchSolutionbyId(solutionID).then(data => setSolution(data)).catch(err => alert(err))
  }, [])

 
  if (!solution) {return <h2>Loading...</h2>}
  return (
      <div>
        <SolutionDetail solution={solution}/>
      </div>
  )
}

export default SolutionDetailPage