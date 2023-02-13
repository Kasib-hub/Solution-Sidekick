import NavBarCSS from './NavBar.module.css'
const NavBar = () => {

  return (
    <div>
      <h2>NavBar element</h2>
      <button className={NavBarCSS.button}>Click Here</button>
    </div>
  )
}

export default NavBar