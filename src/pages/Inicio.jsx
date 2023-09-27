import React from 'react'
import ItemListContainer from '../components/Items/ItemListContainer'
import { useParams } from 'react-router-dom'

  const Inicio = () => {
    const params = useParams()
    console.log(params)
  return (
    <div>
      <h3 className="my-5 bg-light p-3 mx-auto">Tienda</h3>
      <ItemListContainer/>
    </div>
  )
}

export default Inicio