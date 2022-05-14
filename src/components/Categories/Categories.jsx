import React from 'react'
import styledComponents from 'styled-components'
import CategoryItem from './CategoryItem'
import { categories } from './data'
import { mobile } from "../../responsive";

const Container = styledComponents.div`
    display: flex;
    padding: 8px;
    justify-content: space-between;
    ${mobile({fontSize:"7px"})}
    
`
const Categories = () => {
  return (
    <Container>
         {categories.map(item=>(
            <CategoryItem item={item} key={item.id} />
        ))} 
    </Container>
  )
}

export default Categories