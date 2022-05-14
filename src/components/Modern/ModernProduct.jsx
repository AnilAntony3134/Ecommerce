import { Favorite } from '@material-ui/icons'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styledComponents from 'styled-components'
import { Cart } from '../../Context'
import { mobile } from "../../responsive";

const Container = styledComponents.div`
    height: 320px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    background-color: #ececec;
    border-radius: 5%;
    margin-right: 20px;
    overflow: hidden;



`
const Img = styledComponents.img`
    flex: 1;
    height: 100%;
    width: 40%;
    background-color: #2e2e2e;
    object-fit: contain;
    // padding: 13px;
    border-top-left-radius: 5%;
    border-bottom-left-radius: 5%;
    transition: 0.5s;
    &:hover{
        transform: scale(1.05);
    }
`
const Info = styledComponents.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`
const TitleContainer = styledComponents.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({justifyContent: "flex-start"})}
`
const Title = styledComponents.h1`
    font-size: 22px;
    font-weight: 600;
    ${mobile({fontSize: "18px"})}
`
const Price = styledComponents.p`
    margin-right: 10px;
    margin-left: 10px;
    font-size: 20px;
    font-weight: 600;
    color: #969696;
`
const InStock = styledComponents.span`
    font-size: 16px;
    margin-top: -10px;
    font-weight: 600;

`
const SizeContainer = styledComponents.div`
    display: flex;
    margin-top: 25px;

`
const Size = styledComponents.span`
    margin-right: 10px;
    font-size: 16px;
    cursor: pointer;
    padding: 8px;
    font-weight: 600;
    border-radius: 20%;
    transition: 0.5s;
    &:hover{
        background-color: black;
        color: white; 
    }
`
const BuyContainer = styledComponents.div`
    display: flex;
    // flex-direction: column;
    margin-top: 65px;
    align-items:center;
   
   
    
`
const BuyButton = styledComponents.button`
    text-decoration: none;
    margin-right: 5px;
    padding: 10px 10px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 10px;
    border: 1px solid gray;
    cursor: pointer;
    background-color: black;
    color: white;
    ${mobile({fontSize: "14px"})}
    
`
const BagButton = styledComponents.button`
    margin-right: 10px;
    padding: 10px 10px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 10px;
    border: 1px solid gray;
    cursor: pointer;
    ${mobile({fontSize: "14px"})}
`
const FavouriteButton = styledComponents.div`
    border: 1px solid gray;
    padding: 6px;
    border-radius: 10px;
    color: gray;
    cursor: pointer;
    transition: 0.5s;
    ${mobile({display:"none"})}
    &:hover{
        color: red;
    }
`
const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  const linkStyle1 = {
    textDecoration: "none",
    color: "white",
  };



const ModernProduct = ({item}) => {
    const {cart, setcart} = useContext(Cart);
  return (
    <Container>
         
        <Img src={item.img}/>

        <Info>
            <Link to={`/product/${item.id}` } style={linkStyle}>
             <TitleContainer>
                 <Title>
                    {item.title}
                 </Title>
                 <Price>
                    ${item.price}
                 </Price>
             </TitleContainer>
             </Link>
             <InStock>
                 In stock
             </InStock>
             <SizeContainer>
                <Size>XS</Size>
                <Size>S</Size>
                <Size>M</Size>
                <Size>L</Size>
                <Size>XL</Size>
             </SizeContainer>
             {'___________________________________'}
             <BuyContainer>
                 <BuyButton>
                     <Link to={`/product/${item.id}`} style={linkStyle1}>
                    Buy now
                    </Link>
                    </BuyButton>
                    {cart.includes(item)?(
                         <BagButton 
                         onClick={()=>{
                             setcart(cart.filter((c)=> c.id !== item.id));
                         }}
                         >
                            Remove from bag
                         </BagButton>
                    ):
                    ( <BagButton 
                        onClick={()=>{
                           setcart([...cart,item]);
                        }}
                        >
                           Add to bag
                        </BagButton>)}
                 <FavouriteButton>
                 <Favorite />
                 </FavouriteButton>
             </BuyContainer>
        </Info>

    </Container>
  )
}

export default ModernProduct