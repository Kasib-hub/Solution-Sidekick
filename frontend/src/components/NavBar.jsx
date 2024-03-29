import NavBarCSS from './NavBar.module.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const NavBar = () => {

  const {user} = useContext(AuthContext)

  return (
    <div className={NavBarCSS.navBar}>
      <div className={NavBarCSS.login_as}>
        {
          user ? <span>Logged in as: {user.username}</span> : <span>Not Logged in</span>
        }
      </div>
      <div>
        <h3>Solution-Sidekick</h3>
      </div>
      <div className={NavBarCSS.links}>
        <Link to='/'>Home</Link>
        <span> | </span>
        <Link to='/solution_list'>All Solutions</Link>
        <span> | </span>
        <Link to='/create_solution'>Create a Solution</Link>
        <span> | </span>
        <Link to='/signup'>Register Account</Link>
        <span> | </span>
        {
          user ? <Link to='/logout'>Log Out</Link> : <Link to='/login'>Login</Link>
        }
      </div>
    </div>
  )
}

export default NavBar