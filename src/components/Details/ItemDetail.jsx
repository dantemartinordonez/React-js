import React, { useEffect } from 'react'
import Counter from '../Counter/Counter'
import { Card } from 'react-bootstrap'

const ItemDetail = ({ item }) => {
  const priceStyle = {fontSize: '24px', backgroundColor: 'lightblue', padding: '8px', borderRadius: '4px',};

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ width: '20rem', textAlign: 'center' }}>
        <h5>{item.title}</h5>
        <img src={item.image} alt={item.title} />
        <p>description: {item.description}</p>
        <div style={priceStyle}>Price: {item.price}</div>
        <p>category: {item.category}</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Counter />
        </div>
      </Card>
    </div>
  );
}

export default ItemDetail