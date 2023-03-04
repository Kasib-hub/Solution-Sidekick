import { Link } from "react-router-dom"
import './SolutionList.css'
import LikesOnSolution from "./LikesOnSolution"

const SolutionList = ({solutions}) => {

  return (
    <div>
      {
        solutions.map((solution, idx) => {
          return (
            <div key={idx} className='map-item'>
              {/* show likes here somewhere */}
              <div className="sol-links">
                <p></p>
                <h3>{solution.title}</h3><span><LikesOnSolution solution={solution}/></span>
              </div>

              <p>by {solution.creator_name} at {solution.created_at}</p>
              <p>{solution.instructions}</p>
              <div>
                <Link to={`/solution/${solution.id}`}>View Solution</Link>
                {/* comments/likes should go here somewhere  */}
              </div><br />
              <hr />
            </div>  
          )
        })
      }
    </div> 
  )
}

export default SolutionList