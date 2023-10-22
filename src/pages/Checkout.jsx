import { doc, getFirestore, updateDoc, writeBatch } from 'firebase/firestore'
import React from 'react'
import { useParams } from 'react-router-dom'

const Checkout = () => {
  const { orderId } = useParams()

  
  const updateOrder = () => {
    
    const db = getFirestore()

    
    const orderDoc = doc(db, "orders", orderId)

    
    updateDoc(orderDoc, { otroTotal: 2000 })
      .then(res => console.log("Orden actualizada"))
      .catch(err => console.log("Ocurrió un error al actualizar la orden"))
  }

  
  const updateOrders = () => {
    
    const db = getFirestore()

    
    const batch = writeBatch(db)

    
    const doc1 = doc(db, "orders", "")
    const doc2 = doc(db, "orders", "")
    const doc3 = doc(db, "orders", "")

    
    batch.update(doc1, { total: 1000 });

    batch.set(doc2, { otraProp: "Otra PROP con SET II", total: 600 }, { merge: true });
    

    batch.set(doc3, { unicaProp: "Doc nuevo" }, { merge: false });
    
    
    batch.commit()
      .then(() => console.log("Se ejecutó el batch de actualización"))
      .catch(err => console.log("Ocurrió un error al ejecutar el batch"))
  }

  return (
    <div>
      Gracias por su compra.
      {orderId}
      <button onClick={updateOrders}>Actualizar órdenes</button>
    </div>
  )
}

export default Checkout