
import HomePageCSS from './HomePage.module.css'
import { Link } from 'react-router-dom'

// here is where the api calls will go
const SolutionDetailPage = () => {

  return (
      <div>
          <h2>The SolutionDetailPage</h2>
          <Link to='/create_solution'><button className='submitBtn'>Let's Make a Solution</button></Link>
          <p>I want the homepage to consist of div with formula maker</p>
          <p>Users should be taken directly to what they need</p>
          <p>Anyone can use the calculator, but only authenticated users can save their solutions</p>
    
      </div>
  )
}

export default SolutionDetailPage