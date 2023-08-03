import { useContext } from "react"
import AuthContext from "../context/AuthContext"
import Alert from 'react-bootstrap/Alert';
import { Link } from "react-router-dom";

const LoginPage = () => {

  let {loginUser} = useContext(AuthContext)
  let {error} = useContext(AuthContext)


  return  (
    <>
    
      <div className="general-box">
      {
      error && <Alert key="danger" variant="danger">{error.detail}</Alert>
      }
      <h3>Login to Save Your Solutions!</h3>
      <form onSubmit={loginUser}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" placeholder="Enter Username" required/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Enter password" required/><br />
        <button type="submit" className="submitBtn">Login</button>
      </form><br />
      <p>Not Registered? <Link to='/signup'>Register here!</Link></p>

      </div>

    </>


  )
}

export default LoginPage