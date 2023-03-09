import { useNavigate } from "react-router-dom"
import { getUserData, loginWithToken } from "../api/SolutionAPI"
import { useState, useEffect } from "react"

const LoginPage = () => {

  const navigate = useNavigate()
  const [userToken, setUserToken] = useState(null)

  // navigating after a signup, but I also want a token and a post to the 
  const handleSubmit = (event) => {
    event.preventDefault()
    let userData = {
      "username": event.target.username.value,
      "password": event.target.password.value,
      "email": event.target.password.value
    }
    
    loginWithToken(userData)
      .then(res => res.json())
      // token accessed at data.token, store in cookie
      .then(data => {
        document.cookie = `token=${data.token}; path=/;`
        setUserToken(data.token)
      })
      .catch(error => alert(error))
  }

  useEffect(() => {
    if (userToken) {
      getUserData()
          // set timeout to give app time to retrieve new token and refresh to reflect username at top
      setTimeout(() => {
        navigate('/')
        window.location.reload()
      }, 1000)
    }

  }, [userToken])


  return (
    
    <div className="general-box">
      <h3>Login Page</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" placeholder="Enter Username" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Enter password" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Enter Email" /><br />
        <button type="submit" className="submitBtn">Login</button>
      </form>
    </div>

  )
}

export default LoginPage