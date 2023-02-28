import { useState, useEffect } from 'react'
import HomePage from './pages/HomePage';
import SolutionEditPage from './pages/SolutionEditPage';
import SolutionListPage from './pages/SolutionListPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CreateSolutionPage from './pages/CreateSolutionPage';
import LogoutPage from './pages/LogoutPage';
import DeleteSolutionPage from './pages/DeleteSolutionPage';
import SolutionDetailPage from './pages/SolutionDetailPage';
import PrivateRoutes from './utils/PrivateRoutes';
import './App.css'
import NavBar from './components/NavBar'
import { fetchAllSolutions } from './api/SolutionAPI';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {

  const [solutions, setSolutions] = useState()
  const [userID, setUserID] = useState()
  const [username, setUsername] = useState()

  useEffect(() => {
    fetchAllSolutions().then(data => setSolutions(data))
    setUserID(Number(localStorage.getItem('userID')))
    setUsername(localStorage.getItem('username'))
  }, [userID])


  return (
    <div className="App">
      
      <Router>
        <NavBar username={username}/>
        <Routes>
          {/* render a page then make the link on that page to something you need */}
          <Route element={<PrivateRoutes />}>
            <Route exact path='/'  element={<HomePage />} />
            <Route path='/solution_list' element={<SolutionListPage solutions={solutions}/>}/>
            <Route path='/create_solution' element={<CreateSolutionPage />}/>
            <Route path='/solution/:solutionID' element={<SolutionDetailPage/>}/>
            <Route path='/solution/:solutionID/edit' element={<SolutionEditPage  />}/>
            <Route path='/solution/:solutionID/delete' element={<DeleteSolutionPage />}/>
            <Route path='/logout' element={<LogoutPage />}/>
          </Route>

          <Route path='/login' element={<LoginPage />}/>
          <Route path='/signup' element={<SignupPage />}/>
          
          
        </Routes>
        {/* <Link to='solution'>Make a Solution</Link> */}
      </Router>
      
      
    </div>
  )
}

export default App
