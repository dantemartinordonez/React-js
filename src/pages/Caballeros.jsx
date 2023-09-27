import React from 'react'
import useFetch from '../Hooks/useFetch'
import { Container } from 'react-bootstrap'
import ItemList from '../components/Items/ItemList'

const Caballeros = () => {
    const [items] = useFetch ("https://fakestoreapi.com/products/category/men's clothing")
  return (
<Container>
        {
        items !== null &&
        <ItemList items = {items}/>
        }
    </Container>
  )
}

export default Caballeros