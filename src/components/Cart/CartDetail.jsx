import React, { useContext, useState } from 'react'
import FormComponent from '../Form/FormComponent'
import { addDoc, collection, getFirestore } from "firebase/firestore"
import styles from './style.module.css'
import CartContext from '../../context/cartContext/CartContext'
import { updateStockInFirestore } from '../../service/firebaseService'
import Swal from 'sweetalert2'


const CartDetail = () => {
    const [buyer, setBuyer] = useState({
        name: "",
        email: "",
        phone: ""
    });
    const [error, setErrors] = useState({
        name: "",
        email: "",
        phone: "" 
    });
    const [orderId, setOrderId] = useState("");
    const { cart, removeItem, clear, getTotal } = useContext(CartContext);

    const addToCart = () => {
        const purchase = {
            buyer,
            items: cart,
            date: new Date(),
            total: getTotal()
        };
        console.log(purchase);
        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, purchase)
            .then(res => {
                setOrderId(res.id);
                cart.forEach(item => {
                    updateStockInFirestore(item.id, item.stock - item.quantity);
                });
            })
            .catch(err => console.log(err));
        
        clear();
    };

    const handleChange = (e) => {
        const { target } = e;
        setBuyer({
            ...buyer,
            [target.name] : target.value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const errorLocal = {};
        if (!buyer.name) {
            errorLocal.name = "El nombre es obligatorio";
        }
        if (!buyer.email) {
            errorLocal.email = "El email es obligatorio";
        }
        if (!buyer.phone) { 
            errorLocal.phone = "El número de teléfono es obligatorio";
        }

        if (Object.keys(errorLocal).length === 0) {
            addToCart();
    
        Swal.fire({
        icon: 'success',
        title: '¡Gracias por tu orden!',
        html: `<p>Orden creada: ${orderId}</p>
               <p>Resumen de la orden:</p>
               ${cart.map(el => `<p>Producto: ${el.name}, Cantidad: ${el.quantity}</p>`).join('')}
               <p>Total: ${getTotal()}</p>
               <p>¡Muchas gracias!</p>`,
        showConfirmButton: false,
        timer: 10000
    });
} else {
    setErrors(errorLocal);
}
};

    


    return (
<div>
    <h4>Mis Compras</h4>
        
        
        <FormComponent 
            formData={buyer}
            inputChange={handleChange}
            onSumbit={onSubmit}
        >
        </FormComponent>

        {cart.map(el => (
            <div className={styles.container} key={el.id}>
                <div className={styles.cardBody}>
                    <p>Product: {el.name}</p>
                    <p>Cantidad: {el.quantity}</p>
                </div>
                <img src={el.image} className={styles.image} />
                <button onClick={() => removeItem(el.id)} className={styles.cartButton}>Eliminar</button>
            </div>
        ))}
        <p>Total: ${getTotal()}</p>
        {
                cart.length > 0 &&
                <button className='btn btn-primary' onClick={onSubmit}>Create order</button>
            }
        {orderId && <span>Order created: {orderId}</span>}
    </div>
    )
}

export default CartDetail