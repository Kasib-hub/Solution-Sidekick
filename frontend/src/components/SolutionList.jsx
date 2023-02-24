import { Link } from "react-router-dom"
import SolutionListCSS from './SolutionList.css'

const SolutionList = ({solutions, userID}) => {

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
                {
                  solution.creator === userID 
                  && <div className="sol-link-edit"><span> | </span><Link to='#'>Edit Solution</Link></div>
                }
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