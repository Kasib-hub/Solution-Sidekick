import { useEffect, useState } from "react"
import { fetchAllSolutions } from "../api/SolutionAPI"
import SolutionList from "../components/SolutionList"

const SolutionListPage = () => {

  const [solutions, setSolutions] = useState()

  useEffect(() => {
    fetchAllSolutions().then(data => {setSolutions(data)})
  }, [])

  return (
    <div className="general-box">
      <h2>Solution List</h2><br/>
      {!solutions ? <p>Loading...</p> : <SolutionList solutions={solutions}/>}
    </div>
  )

}

export default SolutionListPage