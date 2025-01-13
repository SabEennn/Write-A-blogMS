import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/blog/Home'
import Register from './pages/auth/Register'
import Addblog from './pages/blog/Addblog'
import Login from './pages/auth/Login'

function App() {

  return (

    <BrowserRouter>
    <Routes>  
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/addblog' element={<Addblog />} />
      <Route path='/login' element={<Login />} />
      <Route></Route> 
    </Routes>
    </BrowserRouter>  
    
  )
}

export default App
