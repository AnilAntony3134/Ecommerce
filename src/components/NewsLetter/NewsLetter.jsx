import { Send} from '@material-ui/icons'
import React from 'react'
import styledComponents from 'styled-components'
import { mobile } from "../../responsive";

const Container = styledComponents.div`
    height: 420px;
    padding:10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fcf1d2;
    // padding-top: 60px;
    ${mobile({height: "250px"})}

`
const Title = styledComponents.h1`
    font-size: 55px;
    ${mobile({fontSize: "25px"})}
`
const Description = styledComponents.p`
    font-size: 20px;
    margin-top: 0px;
    margin-bottom: 20px;
    ${mobile({fontSize: "15px"})}
`
const Search = styledComponents.div`
     width: 50%;
     height: 40px;
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     border: 1px solid lightgray;
`
const Input = styledComponents.input`
    border: none;    
    flex: 8;
    padding-left: 20px;
   
`
const Icon = styledComponents.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`

const NewsLetter = () => {
  return (
    <Container>
        <Title>
            Newsletter
        </Title>
        <Description>
            Get Timely updates from your favourite products
        </Description>
        <Search>
            <Input />
            <Icon>
            <Send />
            </Icon>
        </Search>
    </Container>
  )
}

export default NewsLetter