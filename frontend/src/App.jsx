
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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

const App = () => {

  return (
    <div className="App">
      
      <Router>
        <AuthProvider>
          <NavBar />
            <Routes>
              {/* render a page then make the link on that page to something you need */}
              <Route element={<PrivateRoutes />}>
                <Route exact path='/'  element={<HomePage />} />
                <Route path='/solution_list' element={<SolutionListPage />}/>
                <Route path='/create_solution' element={<CreateSolutionPage />}/>
                <Route path='solution/:solutionID' element={<SolutionDetailPage/>}/>
                <Route path='solution/:solutionID/edit' element={<SolutionEditPage  />}/>
                <Route path='solution/:solutionID/delete' element={<DeleteSolutionPage />}/>
                <Route path='/logout' element={<LogoutPage />}/>
              </Route>
              <Route path='/login' element={<LoginPage />}/>
              <Route path='/signup' element={<SignupPage />}/>
            
            </Routes>
          </AuthProvider> 
        {/* <Link to='solution'>Make a Solution</Link> */}
      </Router>
      
      
    </div>
  )
}

export default App
