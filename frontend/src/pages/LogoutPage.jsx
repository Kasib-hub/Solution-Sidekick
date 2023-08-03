import { useContext } from "react"
import AuthContext from "../context/AuthContext"

const LogoutPage = () => {

  const {logoutUser} = useContext(AuthContext)

  return (
    <div className="general-box">
      <h3>Are you sure want to Logout?</h3><br />
      <button type='submit' className='submitBtn' onClick={logoutUser}>Yes, Log me Out</button>
    </div>

  )
}

export default LogoutPage