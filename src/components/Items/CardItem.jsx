import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CardItem = ({ item }) => {
    return (
        <Card style={{ width: '15rem' }}className='mx-2 mt-4' >
            <Card.Img variant="top" src={item.image}  style={{ height: '25%' }} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                <Card.Text>
                    Tipo: {item.category}
                </Card.Text>
                    Stock: {item.stock}
                </Card.Text>
                <Card.Text>
                    Precio: {item.price}
                </Card.Text>
                
                <Link to={`/detalle/${item.id}`}>
                    <Button variant="primary">Ver detalles</Button>
                </Link>
            </Card.Body>
        </Card>
        
    );
}

export default CardItem