import star from '../assets/star.svg'
import HomePageCSS from './HomePage.module.css'
import { Link } from 'react-router-dom'


const HomePage = () => {
    
  return (
      <div>
          <h2>The HomePage</h2>
          <Link to='/solution'><button className={HomePageCSS.homeBtn}>Let's Make a Solution</button></Link>
    
      </div>
  )
}

export default HomePage