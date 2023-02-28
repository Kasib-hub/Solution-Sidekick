import { Link } from "react-router-dom"
import './SolutionList.css'

const SolutionList = ({solutions}) => {

  return (
    <div>
      {
        solutions.map((solution, idx) => {
          return (
            <div key={idx}>
              <h3>{solution.title}</h3>
              <p>by {solution.creator_name} - {solution.instructions}</p>
              <div className="sol-links">
                <Link to={`/solution/${solution.id}`}>View Solution</Link>
                {/* comments/likes should go here somewhere  */}
              </div>
              <hr />
            </div>  
          )
        })
      }
    </div> 
  )
}

export default SolutionList