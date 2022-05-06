import React, { useEffect } from 'react';
import styledComponents from 'styled-components';
import {popularProducts} from "./data";
import Product from './Product';
// import { AOS } from 'aos';
// import "aos/dist/aos.css";

const Container = styledComponents.div`
    padding: 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = () => {
    // useEffect(()=>{
    //     AOS.init({ duration: 2000 });
    // },[]);
  return (
    <Container
    //  data-aos="fade-up"
     >
        {popularProducts.map(item=>(
             <Product item={item} key={item.id} />
        ))
        }
        
    </Container>
  )
}

export default Products