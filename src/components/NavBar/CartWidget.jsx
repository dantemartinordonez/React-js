import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 
import { Link } from 'react-router-dom'; 
import UserContext from '../../context/userContext/UserContext';

const CartWidget = () => {
  const style = {
    color: 'white',
    marginRight: '10px',
    cursor: 'pointer', 
  };
  return (
    <div style={style}>
      <Link to="/cart">
        <FaShoppingCart /> 
      </Link>
      <UserContext.Consumer>
        {({ user }) => <p>Welcome, {user.name}</p>}
      </UserContext.Consumer>
    </div>
  );
};

export default CartWidget;