import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CardItem = ({ item }) => {
    const cardStyle = {
        width: '18rem',backgroundColor: '#f5f5f5',}

        
    return (
        <Card style={cardStyle} className='mx-2 mt-4'>
            <Card.Img variant="top" src={item.image} style={{ height: '30%' }} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    {item.description}
                </Card.Text>
                <Link to={`/detalle/${item.id}`}>
                    <Button variant="primary">Más detalles</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default CardItem;