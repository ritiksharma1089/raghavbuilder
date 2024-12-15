
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './compoments/Navbar'
import "./App.css"
import Card_palate from './compoments/Card_palate'
import Home from './pages/home'
import Card_item from './compoments/CardItem'
import Order from './pages/Order'
import Footer from './compoments/Footer'
import Social from './compoments/social'
import Aboutus from './pages/Aboutus'
import Contact from './pages/Contact'
import PrivateRoute from './Admin_comp/Private_Route'
import Dashboard from './Admin_comp/Dashboard'
function App() {
  

  return (
    <div>


 
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<Aboutus/>} />
          <Route path="/order" element={<Card_palate />} />
          <Route path="/contacts" element={<Contact/>} />
          <Route path="/order/:id" element={<Order/>} />
          <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
        </Routes>
      </BrowserRouter>

    <Footer/>
    <Social/>
</div>
  )
}

export default App
