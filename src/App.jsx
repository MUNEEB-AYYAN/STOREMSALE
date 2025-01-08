import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import CheckOut from './pages/CheckOut'
import Contact from './components/Contact'
import AboutUs from './components/About'
import Register from './components/Register'
import Login from './components/Login'

function App() {
  return (
    <div>

      <Navbar />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Shop' element={<Shop />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/checkout' element={<CheckOut />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/about' element={<AboutUs />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/sign' element={<Register/>}></Route>
        </Routes>
        
      <Footer />

        
        
    </div>
  )
}

export default App
