import { doc, getFirestore, updateDoc } from 'firebase/firestore'
import React from 'react'
import { useParams } from 'react-router-dom'


const Checkout = () => {
  const { orderId } = useParams()

  
  const updateOrders = () => {
    
    const db = getFirestore()

    
    const orderDoc = doc(db, "orders", orderId)

    
    updateDoc(orderDoc)
      .then(res => console.log("Orden actualizada"))
      .catch(err => console.log("Ocurrió un error al actualizar la orden"))
  }

  

  return (
    <div>

  <h3>Gracias por su compra!</h3>
    

      <p>Numero de orden: {orderId} </p> 
      <button onClick={updateOrders}>Actualizar órdenes</button>
    </div>
  )
}

export default Checkout