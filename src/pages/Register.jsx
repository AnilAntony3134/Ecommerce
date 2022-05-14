import styledComponents from "styled-components"
import { Footer, Navbar } from "../components";
import { mobile } from "../responsive";

const Container = styledComponents.div`
width: 100vw;
height: 100vh;    
background: linear-gradient(
    rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)),
        url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
        center;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
`
const Wrapper = styledComponents.div`
    background-color: white;
    width: 35%;
    padding: 15px;
    ${mobile({width:"65%"})}
`
const Form = styledComponents.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Title = styledComponents.h1`
    font-size: 30px;
    font-weight: 300;
    margin-top: 0;
    ${mobile({fontSize:"22px"})}
    
`
const Input = styledComponents.input`
    flex: 1;
    min-width: 30%;
    margin-right: 10px;
    margin-bottom: 15px;
    padding: 10px;
    font-size: 15px;
    background-radius: 10%;
`
const Agreement = styledComponents.p`
    ${mobile({fontSize:"14px"})}
`

const Button = styledComponents.button`
    background-color: teal;
    border: none;
    color: white;
    padding: 12px 60px;
    font-size: 16px;
    font-weight: 100;
    cursor: pointer;
    transition: 0.25s;
    &: hover{
        background-color: #095858;
    }
`


const Register = () => {
  return (
      <>
      <Navbar />
    <Container>
        <Wrapper>
            <Title>
                CREATE AN ACCOUNT
            </Title>
            <Form>
                <Input placeholder="name"/>
                <Input  placeholder="last name"/>
                <Input  placeholder="username"/>
                <Input  placeholder="email"/>
                <Input  placeholder="password"/>
                <Input  placeholder="confirm password"/>
            </Form>
            <Agreement>
                By creating this account I concent to the processing of my personal data accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>
                Create
            </Button>
        </Wrapper>
    </Container>
    <Footer />
    </>
  )
}

export default Register