import { useNavigate } from "react-router-dom"
import { getToken } from "../api/SolutionAPI"

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
    getToken(userData)
    navigate('/solution_list')
    
  }

  return (
    <div>
      <h3>Login Page</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Enter Username" />
        <input type="password" name="password" placeholder="Enter password" />
        <input type="email" name="email" placeholder="Enter Email" />
        <input type="submit" value="submit" />
      </form>
    </div>

  )
}

export default LoginPage