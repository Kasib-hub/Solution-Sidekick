import { useNavigate } from "react-router-dom"

const LogoutPage = () => {

  const navigate = useNavigate()

  // navigating after a signup, but I also want a token and a post to the 
  const handleClick = () => {
    document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC path=/;`
    localStorage.removeItem('userID')
    localStorage.removeItem('username')
    
    navigate('/login')
    window.location.reload();
  }

  return (
    <div className="general-box">
      <h3>Are you sure want to Logout?</h3>
      <button type='submit' className='submitBtn' onClick={handleClick}>Yes, Log me Out</button>
      
    </div>

  )
}

export default LogoutPage