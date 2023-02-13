import { useState } from 'react'
import HomePage from './pages/HomePage';
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
        <Link to='home'>Home</Link>
        <Routes>
          
          <Route path='/home' element={<HomePage />}/>
        </Routes>
      </Router>
      
      
    </div>
  )
}

export default App
