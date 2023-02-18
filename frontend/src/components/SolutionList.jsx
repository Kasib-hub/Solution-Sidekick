import { Link } from "react-router-dom"
import { fetchAllSolutions } from "../api/SolutionAPI"

const SolutionList = ({solutions}) => {
  
  return (
    <div>
      {
        solutions.map((solution, idx) => {
          return (
            <div key={idx}>
              <h3>{solution.title}</h3>
              <p>by {solution.creator_name} - {solution.instructions}</p>
              <Link to={`#`}>Edit Solution</Link>
              <hr />
            </div>  
          )
        })
      }
    </div>
    
  )

}

export default SolutionList