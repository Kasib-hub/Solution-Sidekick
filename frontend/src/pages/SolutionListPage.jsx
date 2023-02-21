import { useEffect, useState } from "react"
import { fetchAllSolutions } from "../api/SolutionAPI"
import SolutionList from "../components/SolutionList"
import { getUserData } from "../api/SolutionAPI"

const SolutionListPage = () => {

  const [solutions, setSolutions] = useState()

  useEffect(() => {
    fetchAllSolutions().then(data => {setSolutions(data)})
  }, [])

  const [userObj ,setUserObj] = useState()

  useEffect(() => {
    getUserData().then(res => setUserObj(res.data))
  }, [])
  return (
    <div>
      <h3>Welcome user number {userObj.user_id}</h3>
      <h2>Solution List</h2>
      {!solutions ? <p></p> : <SolutionList solutions={solutions}/>}
    </div>
    
  )

}

export default SolutionListPage