import React, { useState, useEffect } from 'react';
import CartContext from './CartContext';

const CartContextProvider = ({ children }) => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    const [cart, setCart] = useState(storedCart || []);

    const saveCartToLocalStorage = (cart) => {
        localStorage.setItem('cart', JSON.stringify(cart));
    };

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
            saveCartToLocalStorage(newCart);
        } else {
            setCart([
                ...cart,
                {
                    ...item,
                    quantity: q,
                },
            ]);
            saveCartToLocalStorage([...cart, { ...item, quantity: q }]);
        }
    };

    const removeItem = (id) => {
        
        const newCart = cart.filter((el) => el.id !== id);
        setCart(newCart);
        saveCartToLocalStorage(newCart);
    };

    const clear = () => {

        localStorage.removeItem('cart');
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

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;