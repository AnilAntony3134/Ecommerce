import { Email, Facebook, Instagram, LocationCity, Phone, Pinterest, Twitter } from '@material-ui/icons'
import React from 'react'
import styledComponents from 'styled-components'

const Container = styledComponents.div`
    display:flex;
    margin-top: 40px;

`
const Info = styledComponents.div`
    flex: 1;
    margin-left: 20px;
`
const Logo = styledComponents.h1`
    font-size: 40px;
`
const Desc = styledComponents.p`
    width: 80%;
    text-align: left;
`
const SocialMedia = styledComponents.div`
    display: flex;
`
const SocialIcon = styledComponents.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #${(props)=>props.color};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right:20px;
`

const Links = styledComponents.div`
    flex: 1;
    display: flex;
    flex-direction: column;
   
`
const Title = styledComponents.h2`
    font-weight: 600; 
    // margin-left: 40px;
   
`
const List = styledComponents.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin-left: -40px;
`
const Link = styledComponents.li`
    text-decoration: none;
    margin-bottom: 15px;
    width: 50%;
`
const Contacts = styledComponents.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    // align-items: center;
    // justify-content: center;
`
const Contact = styledComponents.div`
    display: flex;
    flex-direction: column;
`
const ContactItems = styledComponents.div`
    margin: 20px;
    display: flex;
`
const Ico = styledComponents.div`
    margin-right: 10px;
    display: flex;
`


const  Footer = () => {
  return (
    <Container>
        <Info>
            <Logo>ZUDIO.</Logo>
            <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci incidunt repellendus delectus ab eveniet, quos obcaecati dolor id laborum architecto unde culpa voluptatum cumque odit dicta ipsum necessitatibus similique saepe.</Desc>
            <SocialMedia>
                <SocialIcon color="3B5999">
                      <Facebook />
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                     <Twitter />
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest />
                </SocialIcon>
            </SocialMedia>
        </Info>
        <Links>
            <Title>Useful Links</Title>
            <List>
                <Link>Home</Link>
                <Link>Man Fashion</Link>
                <Link>Accessories</Link>
                <Link>Order Tracking</Link>
                <Link>WishList</Link>
                <Link>Cart</Link>
                <Link>Women Fashion</Link>
                <Link>My Account</Link>
                <Link>WishList</Link>
                <Link>Terms</Link>
            </List>
        </Links>
        <Contacts>
            <Title>Contact</Title>
            <Contact>
                <ContactItems>
                    <Ico>
                    <LocationCity />
                    </Ico>
                    GV Nagar Bangalore India
                </ContactItems>
                <ContactItems>
                    <Ico>
                    <Phone />
                    </Ico>
                    +91 9037210582
                </ContactItems>
                <ContactItems>
                    <Ico>
                    <Email />
                    </Ico>
                    anilantony3134@gmail.com
                </ContactItems>
            </Contact>
        </Contacts>
    </Container>
  )
}

export default Footer