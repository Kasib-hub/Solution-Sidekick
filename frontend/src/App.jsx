import { useState } from 'react'
import HomePage from './pages/HomePage';
import SolutionPage from './pages/SolutionPage';
import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <span>app div</span>
      <NavBar />
      <Router>
        
        <Routes>
          {/* render a page then make the link on that page to something you need */}
          <Route path='/'  element={<HomePage />} />
          <Route path='/solution' element={<SolutionPage />}/>
          
        </Routes>
        {/* <Link to='solution'>Make a Solution</Link> */}
      </Router>
      
      
    </div>
  )
}

export default App
