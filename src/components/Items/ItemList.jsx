import React from 'react'
import { Col, Row } from 'react-bootstrap';

import CardItem from './CardItem';
const ItemList = ({ items }) => {
    return (
        <>
        <Row>
          {items.map((item) => (
            <Col md={4} lg={4} sm={12} key={item.id}>
              <CardItem item={item} />
            </Col>
          ))}
        </Row>
      </>
    )
}

export default ItemList