import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import CartContext from '../../context/cartContext/CartContext';
import { getOneDocument } from '../../service/firebaseService';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = ({ id }) => {
    const [item, setItem] = useState(null);
    const onAdd = (q) => {
        addItem(item, q)
    };
    
    const { addItem } = useContext(CartContext);
   
    useEffect( () => {
        getOneDocument("items",id)
        .then(res => setItem(res))
    }, [])
    return (
        <>
            {
                item !== null &&
                <ItemDetail item={item} onAdd={onAdd} />

            }
        </>
    )
}

export default ItemDetailContainer