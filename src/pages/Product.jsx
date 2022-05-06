import styledComponents from 'styled-components'
import { Announcements, Footer, Navbar, NewsLetter } from '../components'
import { useParams } from 'react-router-dom';
import {popularProducts} from "../components/Modern/data";
import { useEffect, useState } from 'react';

const Container = styledComponents.div`
    
`
const Wrapper = styledComponents.div`
    display: flex;
    align-items: top;
    padding: 50px;
`
const ImageContainer = styledComponents.div`
    flex: 1;
`
const Image = styledComponents.img`
    width: 100%;
    height: 90vh; 
    object-fit: cover;
`
const InfoContainer = styledComponents.div`
    // margin-top: -50px;
    flex: 1;
    padding: 0px 50px;
`
const Title = styledComponents.h1`
    font-size: 50px;
    font-weight: 300;
`
const Desc = styledComponents.p`
    font-size: 16px;
    margin: 20px 0px;

`

const Price = styledComponents.p`
    font-size: 40px;
    font-weight: 100;
    margin-top: -15px;
`
const ColorSlider = styledComponents.div`
    font-size: 20px;
    font-weight: 100;
    display: flex;
    align-items: center;
    margin-right: 30px;
`
const Colordesc = styledComponents.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.bg};
    margin: 0 5px;
`

const SizeSliderOuter = styledComponents.div`
    font-size: 20px;
    font-weight: 100;
    
`
const SizeSlider = styledComponents.select`
    margin-left: 10px;
    padding: 6px;
`
const Size = styledComponents.option`
    
`
const ColorContainer = styledComponents.div`
    display: flex;
`
const CartContainer = styledComponents.div`
    display: flex;
    width: 250px;
    margin-top: 30px;
    justify-content: space-between;
    align-items: center;
`

const CountContainer = styledComponents.div`
    flex: 1;
    display: flex;
    // width: 5px;
    // justify-content: space-between;
    align-items: center;
`
const CountIcons = styledComponents.div`
    transform : scale(2);
    margin: 0 10px 10px 10px;
`
const Button = styledComponents.button`
    padding: 15px;
    border: solid 1px teal;
    font-weight: 500;
    cursor: pointer;
    background-color: white;
    transition: 0.5s;
    &:hover{
        background-color: #1b78a3;
        color: white;
    }
`
const Input = styledComponents.span`
    width: 35px;
    height: 35px;
    border: solid 1px black;
    border-radius: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`


const Product = () => {
const {id}=useParams();
const [item,setItem] = useState(popularProducts);

useEffect(()=>{
    let item=popularProducts.find(item=>item.id===parseInt(id));
    if(item){
        setItem(item);
    }
    
},[]);
console.log(item);
  return (
    <Container> 
        <Navbar />
        <Announcements />
        <Wrapper>
            <ImageContainer>
              <Image src={item.img}/>
            </ImageContainer>
            
            <InfoContainer>
                <Title>
                    {item.title}
                </Title>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, eum error dolor obcaecati accusamus nulla et aut perspiciatis alias iste, nesciunt ab. Velit excepturi temporibus similique exercitationem eveniet quo sint.
                    Lorem exercitationem eveniet quo sint.
                </Desc>
                <Price>
                    ${item.price}
                </Price>
                <ColorContainer>
                <ColorSlider>
                        Color
                    <Colordesc bg="black"/>
                    <Colordesc bg="darkblue" />
                    <Colordesc bg="gray" />
                </ColorSlider>
                <SizeSliderOuter>
                        Size
                    <SizeSlider>
                    <Size> XS </Size>
                    <Size> S </Size>
                    <Size> M </Size>
                    <Size> L </Size>
                    <Size> XL </Size>
                    <Size> XXL </Size>
                </SizeSlider>
              </SizeSliderOuter>
              </ColorContainer>
              <CartContainer>
                <CountContainer>
                    <CountIcons>
                        -
                    </CountIcons>
                   
                        <Input>
                        1
                        </Input>
                        <CountIcons>
                        +
                        </CountIcons>

                       `
                </CountContainer>
                <Button>
                     Add To Cart
              </Button>
              </CartContainer>
            </InfoContainer>
        </Wrapper>
        <NewsLetter />
        <Footer />

    </Container>
  )
}

export default Product