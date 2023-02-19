import { useState } from 'react'
import HomePage from './pages/HomePage';
import SolutionPage from './pages/SolutionPage';
import SolutionListPage from './pages/SolutionListPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CreateSolutionPage from './pages/CreateSolutionPage';
import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {

  return (
    <div className="App">
      
      <Router>
        <NavBar />
        <Routes>
          {/* render a page then make the link on that page to something you need */}
          <Route exact path='/'  element={<HomePage />} />
          <Route path='/solution_list' element={<SolutionListPage />}/>
          <Route path='/create_solution' element={<CreateSolutionPage />}/>
          <Route path='/solution' element={<SolutionPage />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/signup' element={<SignupPage />}/>
          
        </Routes>
        {/* <Link to='solution'>Make a Solution</Link> */}
      </Router>
      
      
    </div>
  )
}

export default App
