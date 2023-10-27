import React, { useState, useContext, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 
import { Link } from 'react-router-dom'; 
import UserContext from '../../context/userContext/UserContext';
import CartContext from '../../context/cartContext/CartContext';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach(item => {
      count += item.quantity;
    });
    setCartCount(count);
  }, [cart]);

  const style = {
    color: 'white',
    marginRight: '10px',
    cursor: 'pointer', 
  };

  return (
    <div style={style}>
      <Link to="/cart">
        <FaShoppingCart />
        {cartCount > 0 && <span style={{ marginLeft: '5px' }}>{cartCount}</span>}
      </Link>
      <UserContext.Consumer>
        {({ user }) => <p>Welcome, {user.name}</p>}
      </UserContext.Consumer>
    </div>
  );
};

export default CartWidget;