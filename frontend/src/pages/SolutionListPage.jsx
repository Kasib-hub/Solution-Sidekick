import { useEffect, useState } from "react"
import { fetchAllSolutions } from "../api/SolutionAPI"
import SolutionList from "../components/SolutionList"
import { getUserData } from "../api/SolutionAPI"

const SolutionListPage = () => {

  const [solutions, setSolutions] = useState()

  useEffect(() => {
    fetchAllSolutions().then(data => {setSolutions(data)})
  }, [])


  return (
    <div>
      <h3>Welcome user number</h3>
      <h2>Solution List</h2>
      {!solutions ? <p></p> : <SolutionList solutions={solutions}/>}
    </div>
    
  )

}

export default SolutionListPage