import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CardItem = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);

    const cardStyle = {
        width: '15rem',
        height: '25rem',
        backgroundColor: 'transparent',
        border: 'none',
    };

    const imageStyle = {
        height: '50%',
        transition: 'opacity 0.2s',
        opacity: isHovered ? 1 : 0.8,
    };

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    const buttonStyle = {
        display: 'flex',
        justifyContent: 'center',
    };

    const titleStyle = {
        fontSize: '0.8em',
        fontWeight: 'bold',
    };

    const detailsStyle = {
        fontSize: '0.6em',
    };

    const priceStyle = {
        fontSize: '0.6em',
    };

    return (
        <Card style={cardStyle} className='mx-2 mt-4'>
            <Card.Img
                variant="top"
                src={item.image}
                style={imageStyle}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            />
            <Card.Body style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
                <Card.Title style={titleStyle}>{item.name}</Card.Title>
                <Card.Text style={detailsStyle}>Tipo: {item.category}</Card.Text>
                <Card.Text style={detailsStyle}>Stock: {item.stock}</Card.Text>
                <Card.Text style={priceStyle}>Precio: ${item.price}</Card.Text>
                <div style={buttonStyle}>
                    <Link to={`/detalle/${item.id}`}>
                        <Button variant="primary">Ver detalles</Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CardItem;
