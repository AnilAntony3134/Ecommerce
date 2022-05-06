import styledComponents from "styled-components"

const Container = styledComponents.div`
width: 100vw;
height: 100vh;    
background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styledComponents.div`
    background-color: white;
    width: 35%;
    padding: 15px;
    display: flex;
    flex-direction: column;
`
const Form = styledComponents.form`
    display: flex;
    flex-direction: column;
`
const Title = styledComponents.h1`
    font-size: 30px;
    font-weight: 300;
    
    margin-top: 0;
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
const Link = styledComponents.a`
    font-size: 16px;
    font-weight: 100;
    cursor: pointer;
    margin-top: 10px;
    transition: 0.25s;
`

const SignIn = () => {
  return (
    <Container>
    <Wrapper>
        <Title>
            SIGN IN
        </Title>
        <Form>
            <Input  placeholder="username"/>
            <Input  placeholder="password"/>
        </Form>
        <Button>
            LOGIN
        </Button>
        <Link>CREATE A NEW ACCOUNT</Link>
    </Wrapper>
</Container>
)
}
 
export default SignIn