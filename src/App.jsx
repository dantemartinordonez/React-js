import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Inicio from './pages/Inicio'
import { Route, Routes } from 'react-router'
import Detalle from './pages/Detalle'
import Jewelery from './pages/Jewelery'
import Dama from './pages/Dama'
import Caballeros from './pages/Caballeros'
import Tecnologia from './pages/Tecnologia'





function App() {

  return (
<>
<NavBar/>
<Routes>
  <Route path='/' element ={<Inicio/>} />
  <Route path='/Detalle/:id' element ={<Detalle/>} />
  <Route path='/jewelery/' element ={<Jewelery/>} />
  <Route path='/Dama/' element ={<Dama/>} />
  <Route path='/Caballeros/' element ={<Caballeros/>} />
  <Route path='/Tecnologia/' element ={<Tecnologia/>} />
  
</Routes>


</>
  )
}

export default App
