import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getUserData } from '../api/SolutionAPI'

const HomePage = () => {

//  useEffect(() => {
//   getUserData().then(data => {
//     setUserID(data.user_id)
//     localStorage.setItem('userID', String(res.data.user_id))
//     localStorage.setItem('username', res.data.username)
//   })
//  }, [])

  return (
      <div className='general-box'>
          <h2>Welcome to the Solution Sidekick</h2>
          <br />
          <Link to='/create_solution'><button className='submitBtn'>Let's Make a Solution</button></Link>
          <div className='homepage-blurb'>
            <br />
            <p>Solution Sidekick was designed to optimize your work flow.</p>
            <br />
            <p>Did you lose your notebook that held all of your handy dilutions? Look no further.</p>
            <br />
            <p>Solution Sidekick will make your calculations and allow you to save them for later use.</p>
            <br />
            <p>Also, checkout what your colleagues have been up to!</p>
          </div>

    
      </div>
  )
}

export default HomePage