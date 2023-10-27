import React from 'react'
import ItemListContainer from '../components/Items/ItemListContainer'
import { useParams } from 'react-router-dom'
import backgroundImage from '../assets/DSC09967.jpg';

  const Inicio = () => {
    const params = useParams()
    const divStyle = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
     
    };
  return (
    <div style={divStyle}>
      <ItemListContainer/>
    </div>
  )
}

export default Inicio