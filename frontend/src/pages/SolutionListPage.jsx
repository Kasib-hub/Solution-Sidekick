import { useEffect, useState } from "react"
import { fetchAllSolutions, getUserData } from "../api/SolutionAPI"
import SolutionList from "../components/SolutionList"

const SolutionListPage = ({solutions}) => {

  // const [solutions, setSolutions] = useState()
  const userID = localStorage.getItem('userID')
  // useEffect(() => {
  //   fetchAllSolutions().then(data => {setSolutions(data)})
  // }, [])

  return (
    <div>
      <h3>Welcome! {userID}</h3>
      <h2>Solution List</h2>
      {!solutions ? <p></p> : <SolutionList solutions={solutions} userID={userID}/>}
    </div>
  )

}

export default SolutionListPage