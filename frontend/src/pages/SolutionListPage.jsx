import { useEffect, useState } from "react"
import { fetchAllSolutions, getUserData } from "../api/SolutionAPI"
import SolutionList from "../components/SolutionList"

const SolutionListPage = () => {

  const [solutions, setSolutions] = useState()
  const [userID , setUserID] = useState()

  useEffect(() => {
    fetchAllSolutions().then(data => {setSolutions(data)})
  }, [])

  useEffect(() => {
    getUserData().then(data => setUserID(data.user_id))
  }, [])

  return (
    <div>
      <h3>Welcome!</h3>
      <h2>Solution List</h2>
      {!solutions ? <p></p> : <SolutionList solutions={solutions} userID={userID}/>}
    </div>
  )

}

export default SolutionListPage