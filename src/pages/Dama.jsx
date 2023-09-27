import React from 'react'
import { Container } from 'react-bootstrap'
import ItemList from '../components/Items/ItemList'
import useFetch from '../Hooks/useFetch'

const Dama = () => {
    const [items] = useFetch ("https://fakestoreapi.com/products/category/women's clothing")
  return (
<Container>
        {
        items !== null &&
        <ItemList items = {items}/>
        }
    </Container>
  )
}

export default Dama