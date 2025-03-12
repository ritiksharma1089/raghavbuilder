
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './compoments/Navbar'
import "./App.css"

import Home from './pages/home'

import Order from './pages/Order'
import Footer from './compoments/Footer'
import Social from './compoments/social'
import Aboutus from './pages/Aboutus'
import Contact from './pages/Contact'
import PrivateRoute from './Admin_comp/Private_Route'
import Dashboard from './Admin_comp/Dashboard'

import Updatepage from './pages/Updatepage'
import ModifyPage from './pages/ModifyPage'
import Loginpage from './pages/Loginpage'

function App() {
  

  return (
    <div>


 
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<Aboutus/>} />
        
          <Route path="/contacts" element={<Contact/>} />
          <Route path="/signin" element={<Loginpage/>} />
          <Route path="/order/:id" element={<Order/>} />
          <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>

          <Route path='/dashboard/update' element={<PrivateRoute><Updatepage/></PrivateRoute>}/>
          <Route path='/dashboard/update/modify/:prod_id' element={<PrivateRoute><ModifyPage/></PrivateRoute>}/>
          
        </Routes>
      </BrowserRouter>

    <Footer/>
    <Social/>
</div>
  )
}

export default App
