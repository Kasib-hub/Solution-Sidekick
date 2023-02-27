import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { BASE_URL } from "../api/SolutionAPI"
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
    const res = await fetch(`${BASE_URL}accounts/signup`, {
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
    <div>
      <h3>Sign up to Save some Solutions!<img src={Flask} alt="" /></h3>
      
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Enter Username" />
        <input type="password" name="password" placeholder="Enter password" />
        <input type="email" name="email" placeholder="Enter Email" />
        <input type="submit" value="submit" />
      </form>

      {/* style the error message to be different color. Purple? */}
      {err ? <p className="err">{err}</p> : <p></p>}
    </div>

  )
}

export default SignupPage