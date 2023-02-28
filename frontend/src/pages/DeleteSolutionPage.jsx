import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import {useParams} from 'react-router-dom'
import { fetchSolutionbyId, deleteSolutionbyId } from '../api/SolutionAPI'
import DeleteSolutionPageCSS from './DeleteSolutionPage.module.css'

const DeleteSolutionPage = () => {
  const userID = Number(localStorage.getItem('userID'))

  const navigate = useNavigate()
  const [solution, setSolution] = useState()

  // I still got the id!
  let {solutionID} = useParams()

  useEffect(() => {
    fetchSolutionbyId(solutionID).then(data => setSolution(data))
  }, [])

  const handleClick = () => {
    deleteSolutionbyId(solution.id).then(data => console.log(data))
    navigate(`/solution_list`)
  }

  if (!solution) {return <h2>Loading...</h2>}

  return (
      <div>
          <p>Are you sure you want to delete {solution.title}?</p>
          <p>Created by {solution.creator_name} at {solution.created_at}</p>
          <button className={DeleteSolutionPageCSS.submitBtn} onClick={handleClick}>Yes, DELETE</button>
      </div>
  )
}

export default DeleteSolutionPage