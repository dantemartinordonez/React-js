import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import {getData, getDocuments} from '../../service/firebaseService'
import ItemList from './ItemList'

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
 
    useEffect( () => {
        const itemCollection = getDocuments("items")
        getData(itemCollection).then(data => setItems(data))

    }, [])
    return (
        <Container>
            <Row>
                {
                    items.length > 0 &&
                    <ItemList items={items} />
                }
            </Row>
        </Container>
    )
}

export default ItemListContainer