import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
      <button
        style={{ backgroundColor: 'lightblue', color: 'white' }}
        onClick={() => {
          console.log('Producto agregado al carrito');
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default Counter;