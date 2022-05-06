import { useContext } from 'react';
import styledComponents from 'styled-components';
import { Cart } from '../../Context';
import {popularProducts} from "./data";
import ModernProduct from './ModernProduct';

const Container = styledComponents.div`
    padding: 25px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
`
const ModernProducts = () => {
    const {cart, setcart} = useContext(Cart);
    console.log(cart);
  return (
    <Container>
        {popularProducts.map(item=>(
             <ModernProduct item={item} key={item.id} />
        ))
        }
        
    </Container>
  )
}

export default ModernProducts