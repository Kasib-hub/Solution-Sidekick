import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

const DeleteSolutionPage = () => {
  
  // I still got the id!
  let {solutionID} = useParams()

  return (
      <div>
          <p>Are you sure you want to delete? {solutionID}</p>
    
      </div>
  )
}

export default DeleteSolutionPage