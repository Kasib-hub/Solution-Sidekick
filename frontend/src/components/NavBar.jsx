import NavBarCSS from './NavBar.module.css'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import { useContext, useState, useEffect } from 'react'
import { getUserData } from '../api/SolutionAPI'



const NavBar = () => {



  return (
    <div className={NavBarCSS.navBar}>
      <Link to='/'>Home</Link>
      <span> | </span>
      <Link to='/solution_list'>All Solutions</Link>
      <span> | </span>
      <Link to='/create_solution'>Create a Solution</Link>
      <span> | </span>
      <Link to='/login'>Login</Link>
      <span> | </span>
      <Link to='/signup'>Signup</Link>
      

    </div>
  )
}

export default NavBar