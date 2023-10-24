import React, { useState } from 'react';
import CartContext from './CartContext';

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, q) => {
        const { id } = item;
        const itemInCart = cart.find((cartItem) => cartItem.id === id);

        if (itemInCart) {
            const newCart = cart.map((el) => {
                if (el.id === id) {
                    return {
                        ...el,
                        quantity: el.quantity + q,
                    };
                }
                return el;
            });
            setCart(newCart);
        } else {
            setCart([
                ...cart,
                {
                    ...item,
                    quantity: q,
                },
            ]);
        }
    };

    const isInCart = (id) => {
        return cart.some((cartItem) => cartItem.id === id);
    };

    const removeItem = (id) => {
        const newCart = cart.filter((el) => el.id !== id);
        setCart(newCart);
    };

    const clear = () => {
        setCart([]);
    };

    const getTotal = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.price * item.quantity; 
        });
        return total;
    };

    const values = {
        cart,
        addItem,
        removeItem,
        clear,
        getTotal,
    };

    return <CartContext.Provider
     value={values}>{children}
     </CartContext.Provider>;
};

export default CartContextProvider;