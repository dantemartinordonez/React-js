import React, { useEffect, useState } from 'react';
import backgroundImage from '../assets/david-brooke-martin-VuZ9U7cWqc8-unsplash.jpg';
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
   
  };

  return (
    <div style={divStyle}>
      <Container>
        <Row>
          
          {items.length > 0 ? <ItemList items={items} /> : ""}
        </Row>
      </Container>
    </div>
  );
};

export default Vinos;