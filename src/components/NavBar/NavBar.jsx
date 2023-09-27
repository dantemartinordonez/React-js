import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom';

const NavBar = () => {
  
  return (

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div className='logo'>
    <img src="/src/assets/278903368_546554643755636_8227567592766426763_n.jpg" alt="logo"/>
  </div>
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Inicio</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Dama">Mujer</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Caballeros">Hombre</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/jewelery">Acsesorios</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Tecnologia">Mundo Tecno</Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    <CartWidget/>
  </div>
</nav>

);
}

export default NavBar