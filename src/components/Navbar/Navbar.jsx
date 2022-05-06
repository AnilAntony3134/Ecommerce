import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styledComponents from "styled-components";
import { Cart } from "../../Context";
import { mobile } from "../../responsive";


const Container = styledComponents.div`
  height: 60px;
  margin-top: 0;
  margin-bottom: 20px;  
  ${mobile({height:"50px"})}
`;
const Wrapper = styledComponents.div`

  padding: 0px 20px 10px 40px;
  display: flex;
  justify-content:space-between;
  align-items: center;
  ${mobile({padding:"5px 10px"})}

`;
const Left = styledComponents.div`
    flex:1;
    display:flex;
    align-items: center;
`;
const Language = styledComponents.span`
    font-size:14px;
    cursor: pointer;
    ${mobile({display:"none"})}
`;
const SearchContainer = styledComponents.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;   
    margin-left: 25px;
    padding: 5px;
    ${mobile({display: "none"})}
   
`;
const Input = styledComponents.input`
    border: none;
    padding: 5px;
`;
const Center = styledComponents.div`
    flex:1;
    text-align: center;
    ${mobile({textAlign: "left" ,position:"absolute", left:"8px"})}
`;
const Logo = styledComponents.h1`
    font-weight: bold;
`;

const Right = styledComponents.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const MenuItem = styledComponents.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({marginLeft: "8px",paddingLeft:"8px"} )}
`;
const linkstyle = {
    textDecoration: "none",
    color: "black",
}

const Navbar = () => {
    const {cart,Setcart} = useContext(Cart);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>

        <Center>
            <Link to="/" style={linkstyle}>
          <Logo>ZUDIO.</Logo>
          </Link>
        </Center>

        <Right>
            <Link to="/register" style={linkstyle}>
          <MenuItem>Register</MenuItem>
          </Link>
          <Link to="/signin" style={linkstyle}>
          <MenuItem>Sign In</MenuItem>
          </Link>
          <Link to="/cart" style={linkstyle}>
          <MenuItem>
            <Badge badgeContent={cart.length} color="primary" />
            <ShoppingCartOutlined />
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
