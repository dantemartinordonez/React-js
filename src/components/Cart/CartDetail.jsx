import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormComponent from '../Form/FormComponent'
import { addDoc, collection, getFirestore } from "firebase/firestore"
import styles from './style.module.css'
import CartContext from '../../context/cartContext/CartContext'

const CartDetail = () => {
    const [buyer, setBuyer] = useState({
        name: "",
        email: ""
    })
    const [errors, setErrors] = useState({
        name: "",
        email: ""
    })
    const [orderId, setOrderId] = useState("")
    const { cart, removeItem, clear } = useContext(CartContext)
    const navigate = useNavigate()
    const addToCart = () => {
        const purchase = {
            buyer,
            items: cart,
            date: new Date(),
            total: 1000
        };
        console.log(purchase)
        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, purchase)
            .then(res => navigate(`/checkout/${res.id}`))
            .catch(err => console.log(err))
        
        clear()
        
    }
    const handleChange = (e) => {
        const { target } = e;
        setBuyer({
            ...buyer,
            [target.name] : target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        const errorLocal = {};
        if(!buyer.name) {
            errorLocal.name = "El nombre es obligatorio"
        };
        if(!buyer.email) {
            errorLocal.email = "El email es obligatorio"
        };
    
        if (Object.keys(errorLocal).length === 0) {
    
            addToCart();
        } else {
            
            setErrors(errorLocal);
        }
    }


    return (
        <div>
            CART
            <FormComponent 
                formData={buyer}
                inputChange={handleChange}
                onSumbit={onSubmit}
            >
            </FormComponent>

            {
                cart.map(el => (
                    <div className={styles.container} key={el.id}>
                        <div className={styles.cardBody}>
                            <p >Product: {el.name}</p>
                            <p >Cantidad: {el.quantity}</p>
                        </div>
                        <img src={el.image} className={styles.image} />
                        <button onClick={() => removeItem(el.id)} className={styles.cartButton}>Eliminar</button>
                    </div>
                ))
            }
            {
                cart.length > 0 &&
                <button className='btn btn-primary' onClick={onSubmit}>Create order</button>
            }
            {
                orderId && <span>Oreder created: {orderId}</span>
            }
        </div>
    )
}

export default CartDetail