import React, { useEffect, useState } from 'react';
import backgroundImage from '../assets/Fondo1.avif';
import { Container, Row } from 'react-bootstrap';
import ItemList from '../components/Items/ItemList';
import { getData, getDocuments } from '../service/firebaseService';


const Vinos = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemCollection = getDocuments('items');
        const data = await getData(itemCollection);
        const vinosItems = data.filter((item) => item.category === 'vino');
        setItems(vinosItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '2rem',
  };

  return (
    <div style={divStyle}>
      <Container>
        <Row>
          {items.length > 0 ? <ItemList items={items} /> : <p>No hay elementos para mostrar.</p>}
        </Row>
      </Container>
    </div>
  );
};

export default Vinos;