import NavBarCSS from './NavBar.module.css'
import { Link } from 'react-router-dom'

const NavBar = () => {

  const username = localStorage.getItem('username')

  return (
    <div className={NavBarCSS.navBar}>
      <div className={NavBarCSS.login_as}>
        <span>Logged in as: {username}</span>
      </div>
      <div className={NavBarCSS.links}>
        <Link to='/'>Home</Link>
        <span> | </span>
        <Link to='/solution_list'>All Solutions</Link>
        <span> | </span>
        <Link to='/create_solution'>Create a Solution</Link>
        <span> | </span>
        <Link to='/login'>Login</Link>
        <span> | </span>
        <Link to='/signup'>Signup</Link>
        <span> | </span>
        <Link to='/logout'>Log Out</Link>
      </div>
    </div>
  )
}

export default NavBar