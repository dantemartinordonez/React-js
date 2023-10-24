import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from '../../assets/278903368_546554643755636_8227567592766426763_n.jpg'; 
const NavBar = () => {
  const navBarStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark" style={navBarStyle}>
      <Container>
        <Navbar.Brand>
          <img
            src={logo}
            width="150"
            height="150"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavLink className={({ isActive }) => isActive ? "link-active navlink" : "navlink"} to="/">Inicio</NavLink>
          <NavLink className={({ isActive }) => isActive ? "link-active navlink" : "navlink"} to="/vinos">Vinos</NavLink>
          <NavLink className={({ isActive }) => isActive ? "link-active navlink" : "navlink"} to="/cart">Compras</NavLink>
          <NavLink className={({ isActive }) => isActive ? "link-active navlink" : "navlink"} to="/UserProfile">usuario</NavLink>
        </Nav>
      </Container>
      <CartWidget />
    </Navbar>
  );
}

export default NavBar;
