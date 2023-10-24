import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Counter = ({ onAdd, text = 'Agregar al carrito', q = 1 }) => {
  const [count, setCount] = useState(q);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    onAdd(count);
    Swal.fire('¡Producto agregado!', 'El producto fue agregado al carrito', 'success');
  };

  return (
    <div>
      <button onClick={increment}>Agregar</button>
      <span>{count}</span>
      <button onClick={decrement}>Restar</button>
      <button onClick={handleAdd}>{text}</button>
    </div>
  );
};

export default Counter;