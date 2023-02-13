import star from '../assets/star.svg'
import HomePageCSS from './HomePage.module.css'

const HomePage = () => {
    
  return (
      <div>
          <h2>The HomePage</h2>
          <p>A star you are! <img src={star} alt='star' /></p>
          <button className={HomePageCSS.navBtn}>Click Here</button>
    
      </div>
  )
}

export default HomePage