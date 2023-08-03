import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"
// consider using state to keep error message to user
const SignupPage = () => {

  const BASE_URL = import.meta.env.VITE_API_URL
  const navigate = useNavigate()
  const [err, setErr] = useState()

  // navigating after a signup, but I also want a token and a post to the 
  const handleSubmit = (event) => {
    event.preventDefault()
    let userData = {
      "username": event.target.username.value,
      "password": event.target.password.value,
    }
    document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC path=/;`
    signUp(userData)
  }

  const signUp = async(userData) => {
    const res = await fetch(`http://${BASE_URL}/solution_api/accounts/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    const data = await res.json()
    res.status === 400 ? setErr(data.username[0]) : navigate('/login')
  }

  return (
    <div className="general-box">
      <h3>Sign up to Save some Solutions!</h3>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" placeholder="Enter Username" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Enter password" /><br />
        <button type="submit" className="submitBtn">Sign Up</button>
      </form><br />
      <p>Already have an account? <Link to='/login'>Login!</Link></p>

      {/* style the error message to be different color. Purple? */}
      {err ? <p className="err">{err}</p> : <p></p>}
    </div>

  )
}

export default SignupPage