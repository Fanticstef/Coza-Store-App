import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './componenets/Navbar'
import Footer from './componenets/Footer'
import Home from './pages/Home'
import Shop from './componenets/Shop'
import About from './pages/About'
import Contact from './pages/Contact'
import ProductDetailsPage from './pages/ProductDetailsPage'
import Cart from './componenets/Cart'
import CheckOut from './pages/CheckOut'
import { useState } from 'react'
import Order from './pages/Order'
import FilterData from './componenets/FilterData'

function App() {

  const [order, setOrder] = useState(null)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/check-out' element={<CheckOut setOrder={setOrder} />} />
        <Route path='/order-confirm' element={<Order order={order} />} />
        <Route path='/product-details/:id' element={<ProductDetailsPage />} />
        <Route path='/filter-data' element={<FilterData />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
