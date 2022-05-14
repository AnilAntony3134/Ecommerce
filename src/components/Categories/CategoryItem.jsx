import React from 'react'
import styledComponents from 'styled-components'
import { mobile } from "../../responsive";

const Container = styledComponents.div`
    flex: 1;
    margin: 10px;
    height: 80vh;
    position: relative;
    transition: all 0.5s ease;
    ${mobile({height:"30%" , marginTop:"-145px"})}
    &:hover {
        transform: scale(1.02);
    }
`
const Wrapper = styledComponents.div`
    width: 100%;
    margin: 3px;
    height: 100%;
    overflow: hidden;
    transition: 0.5s ease;
   
   
`
const Image = styledComponents.img`
    width: 100%;
    margin: 3px;
    height: 100%;
    object-fit: cover;
    ${mobile({height:"40vh"})}
   
    
`
const Info = styledComponents.p`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styledComponents.h1`
    color: white;
    text-align: center;
`
const Button = styledComponents.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
    transition: 0.5s;
    ${mobile({fontSize:"10px"})}
    &:hover {
        background-color: gray;
        color: white;
    }

`


const CategoryItem = ({item}) => {
  return (
    <Container>
        <Wrapper>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Wrapper>
    </Container>
  )
}

export default CategoryItem