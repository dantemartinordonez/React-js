import React from 'react'
import ItemListContainer from '../components/Items/ItemListContainer'
import { useParams } from 'react-router-dom'

  const Inicio = () => {
    const params = useParams()
  return (
    <div>
      <ItemListContainer/>
    </div>
  )
}

export default Inicio