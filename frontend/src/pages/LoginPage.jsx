import { useNavigate } from "react-router-dom"
import { loginWithToken } from "../api/SolutionAPI"

const LoginPage = () => {

  const navigate = useNavigate()

  // navigating after a signup, but I also want a token and a post to the 
  const handleSubmit = (event) => {
    event.preventDefault()
    let userData = {
      "username": event.target.username.value,
      "password": event.target.password.value,
      "email": event.target.password.value
    }
    
    loginWithToken(userData)

    
    // set timeout to give app time to retrieve new token and refresh to reflect username at top
    setTimeout(() => {
      navigate('/solution_list')
      window.location.reload()
    }, 500)
    
  }

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