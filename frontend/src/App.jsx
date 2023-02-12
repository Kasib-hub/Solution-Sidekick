import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <p>Lets see hmr</p>
      
    </div>
  )
}

export default App
