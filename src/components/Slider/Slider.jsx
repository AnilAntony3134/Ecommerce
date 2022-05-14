import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styledComponents from 'styled-components'
import { sliderItems } from './data'
import { mobile } from "../../responsive";


const Container = styledComponents.div`
    width: 100%;
    height: 50vh;
    display: flex;
    position: relative;
    overflow: hidden;
`

const Arrow = styledComponents.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=>props.direction=== "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;

`
const Wrapper = styledComponents.div`
    height:100%;
    display : flex;
    transition: all 1.5s ease;
    transform : translateX(${props=>props.slideIndex * -100}vw);
   
    
`
const Slides = styledComponents.div`
     display: flex;
     width: 100vw;
     height: 100%;
     background-color: #${(props)=>props.bg}
     ${mobile({ justifyContent: "center" , alignItems: "center" , height: "50%"})}
`

const ImgContainer = styledComponents.div`
    flex: 1;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({ height: "50%"})}
`
const Circle = styledComponents.div`
    height: 25vw;
    width: 25vw;
    border-radius: 50%;
    background-color: violet;
    z-index: 2;
    position: absolute;
    margin-right: 7vw;
`
const Image = styledComponents.img`
    height: 100%;
    margin-left: 80px;
    z-index: 3;
    ${mobile({ marginLeft : "0px"})}
`
const InfoContainer = styledComponents.div`
    flex: 1;
    padding: 50px;
    z-index: 1;
    ${mobile({ flexDirection: "column" , padding: "0px" , marginRight: "0px"})}
    
`
const Title = styledComponents.h1`
    font-size: 70px;
    ${mobile({fontSize: "20px", Width: "20px"})}
`
const Desc = styledComponents.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
    ${mobile({fontSize: "11px",})}
    
`
const Button = styledComponents.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer; 
    ${mobile({fontSize: "10px",})}
`



const Slider = () => {
    const [slideIndex,setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if( direction === "left" )
        {
            setSlideIndex(slideIndex > 0 ? slideIndex-1: 2)
        }
        else{
            setSlideIndex(slideIndex <2 ? slideIndex+1 : 0)
        }
    };

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map(item =>(   
            <Slides bg={item.bg}>
                <ImgContainer>
                    <Circle />
                    <Image src={item.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Link to="/productlist">
                    <Button>SHOP BUTTON</Button>
                    </Link>
                </InfoContainer>
            </Slides>
             ))}
        </Wrapper>
        
        <Arrow direction="right"  onClick={()=>handleClick("right")} >
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider