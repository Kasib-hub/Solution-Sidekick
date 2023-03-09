// outlet lets you nest the route to make it private
import { Outlet, Navigate } from 'react-router-dom'

// rest takes all of the parameters from a route, you then replace a route with it
const PrivateRoutes = () => {
  let token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1")
  let userID = localStorage.getItem('userID')
  let auth = {"token":token, "userID":userID}
  return (
    // dont redirect to the same page!
    // this is saying, if the user is authenticated let them see the homepage, otherwise, go to the login page. The page that triggers all of this is nested within private routes
    auth.token.length > 1 || auth.userID ? <Outlet /> : <Navigate to='/signup' />
  )
}

export default PrivateRoutes