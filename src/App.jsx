import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/blog/Home'
import Register from './pages/auth/Register'
import Addblog from './pages/blog/Addblog'
import Login from './pages/auth/Login'
import Editblog from './pages/blog/Editblog'


function App() {

  return (

    <BrowserRouter>
    <Routes>  
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/blog/add' element={<Addblog />} />
      <Route path='/login' element={<Login />} />
      <Route path='/blog/edit' element={<Editblog />} />
      <Route></Route> 
    </Routes>
    </BrowserRouter>  
    
  )
}

export default App
