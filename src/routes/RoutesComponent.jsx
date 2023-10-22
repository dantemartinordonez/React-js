import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Detalle from '../pages/Detalle'
import Inicio from '../pages/Inicio'
import Vinos from '../pages/Vinos'
import Contact from '../pages/Contact'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import UserProfile from '../pages/UserProfile'




const RoutesComponent = () => {


  return (
    <Routes>
  <Route path='/' element ={<Inicio/>} />
  <Route path='/detalle/:id' element={<Detalle/>} />
  <Route path='/Vinos' element ={<Vinos/>}/>
  <Route path='/UserProfile' element= {<UserProfile/>}/>
  <Route path='/contact' element={<Contact />} />
  <Route path='/cart' element={<Cart />} />
  <Route path='/checkout/:orderId' element={<Checkout />} />
  </Routes>
  )
}

export default RoutesComponent