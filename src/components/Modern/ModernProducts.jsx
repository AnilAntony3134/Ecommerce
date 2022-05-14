import { useContext } from 'react';
import styledComponents from 'styled-components';
import { Cart } from '../../Context';
import {popularProducts} from "./data";
import ModernProduct from './ModernProduct';
import { mobile } from "../../responsive";

const Container = styledComponents.div`
    padding: 25px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    ${mobile({ gridTemplateColumns: "repeat(1, 1fr)"})}
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