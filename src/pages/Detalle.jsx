import React from 'react'
import ItemDetailContainer from '../components/details/ItemDetailContainer'
import { useParams } from 'react-router-dom'

const Detalle = () => {
  const { id } = useParams()

  return (
    <div>
      <ItemDetailContainer id={id}/>
    </div>
  )
}

export default Detalle