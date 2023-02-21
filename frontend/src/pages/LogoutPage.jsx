import { useNavigate } from "react-router-dom"
import { getToken } from "../api/SolutionAPI"

const LogoutPage = () => {

  const navigate = useNavigate()

  // navigating after a signup, but I also want a token and a post to the 
  const handleSubmit = (event) => {
    event.preventDefault()
    
    getToken(userData)
    navigate('/login')
    
  }

  return (
    <div>
      <h3>Are you sure want to Logout?</h3>
      <button onSubmit={handleSubmit}>Yes, Log me Out</button>
      
    </div>

  )
}

export default LogoutPage