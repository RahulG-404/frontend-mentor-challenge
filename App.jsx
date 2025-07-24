import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Trial from './Trial'
import Home from './Home'
import Count from './count'
import Event from './Event'
import {BrowserRouter, Routes, Route,Link, NavLink} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <BrowserRouter>
      <nav>
        <NavLink to="/" activeClassName="active">Home</NavLink>
        <Link to='/trial'>Trial</Link>
        <Link to='/count'>Count</Link>\
        <Link to='/event'>Event</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trial' element={<Trial />} />
        <Route path='/count' element={<Count />} />
        <Route path='/event' element={<Event />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
