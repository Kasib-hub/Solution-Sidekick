import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { FRONT_URL } from "../api/SolutionAPI"
import Flask  from "../assets/FlaskFull.svg"
// consider using state to keep error message to user
const SignupPage = () => {

  const navigate = useNavigate()
  const [err, setErr] = useState()

  // navigating after a signup, but I also want a token and a post to the 
  const handleSubmit = (event) => {
    event.preventDefault()
    let userData = {
      "username": event.target.username.value,
      "password": event.target.password.value,
      "email": event.target.email.value
    }
    document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC path=/;`
    signUp(userData)
  }

  const signUp = async(userData) => {
    const res = await fetch(`${FRONT_URL}/accounts/signup`, {
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
        <input type="password" name="password" placeholder="Enter password" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Enter Email" /><br />
        <button type="submit" className="submitBtn">Sign Up</button>
      </form>

      {/* style the error message to be different color. Purple? */}
      {err ? <p className="err">{err}</p> : <p></p>}
    </div>

  )
}

export default SignupPage