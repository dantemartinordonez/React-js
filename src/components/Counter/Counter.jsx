import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Counter = ({ onAdd, text = 'Agregar al carrito', initial = 1, stock }) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        } else {
            Swal.fire('Disculpe', 'No hay suficiente stock disponible', 'error');
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleAdd = () => {
        if (count <= stock) {
            onAdd(count);
            Swal.fire('¡Producto agregado!', 'El producto fue agregado al carrito', 'success');
        } else {
            Swal.fire('Disculpe', 'No hay suficiente stock disponible', 'error');
        }
    };

    return (
        <div>
            <button onClick={decrement}>Restar</button>
            <span>{count}</span>
            <button onClick={increment}>Agregar</button>
            <button onClick={handleAdd}>{text}</button>
        </div>
    );
};

export default Counter;