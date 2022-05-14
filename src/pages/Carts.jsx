import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styledComponents from "styled-components"
import { Announcements, Footer, Navbar } from "../components"
import { Cart } from "../Context"
import { mobile } from "../responsive";

const Container = styledComponents.div`

`
const Title = styledComponents.h1`
    font-size: 35px;
    text-align: center;
    font-weight: 300;
`
const Wrapper = styledComponents.div`
    display: flex;
    flex-direction: column;
`
const Top = styledComponents.div`
    display: flex;
    justify-content: space-between;
    margin: 0 30px;
     ${mobile({fontSize:"15px", marginTop:"10px"})}
`
const ShopButton = styledComponents.button`
    padding: 10px;
    background-color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    border: 2px solid gray;
    cursor: pointer;
    ${mobile({marginRight:"10px"})}
`
const WishListContainer = styledComponents.div`

`
const List = styledComponents.span`
    margin-right: 20px;
    cursor: pointer;
    ${mobile({display:"none"})}
`
const CheckoutButton = styledComponents.button`
    padding: 10px;
    background-color: #030303;
    color: white;
    font-size: 14px;
    font-weight: 600;
    border: none;
    cursor: pointer;
`
const Bottom = styledComponents.div`
    display: flex;
    margin-top: 30px;
    ${mobile({flexDirection:"column"})}
`
const Left = styledComponents.div`
    flex: 2;
    display: flex;
    flex-direction: column;

`
const Product = styledComponents.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    // box-shadow: 5px 5px 4px #888888;
`
const Productimg = styledComponents.div`
    
`
const Img = styledComponents.img`
    width: 200px;
    ${mobile({width:"150px"})}
`
const ProductInfos = styledComponents.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    
`
const ProductInfo = styledComponents.div`
   display: flex;
   flex-direction: column;
    
`
const Info = styledComponents.span`
    margin-bottom: 15px;
    
`
const PriceInfo = styledComponents.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 50px;

`
const Count = styledComponents.div`
    font-size: 15px;
    margin-bottom: 20px;
`
const Price = styledComponents.div`
    font-size: 25px;
`
const RemoveButton = styledComponents.button`
    padding: 10px 20px;
    background-color: black;
    color: white;
    font-size: 14px;
    border: none;
    margin-bottom: 10px;
    cursor: pointer;
`

const Right= styledComponents.div`
    margin-right: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 90%;
    // justify-content: center;
    // box-shadow: 5px 5px 4px #888888;
    border: 1px solid grey;
    padding: 10px;
`
const Total= styledComponents.div`
    font-size: 18px;
    margin-bottom: 20px;
`
const Totals= styledComponents.div`
    display:flex;
    justify-content: space-between;
    width: 80%;
    ${mobile({justifyContent:"space-between"})}

`
const Button= styledComponents.button`
    padding: 10px 20px;
    background-color: black;
    width: 95%;
    color: white;
    font-size: 20px;
    margin-top: 45px;
    border: none;
    cursor: pointer;
`

const Carts = () => {
    const {cart,setcart} = useContext(Cart); 
    const [total, settotal] = useState();
    useEffect(() => {
        settotal(cart.reduce((acc, curr) => acc + parseInt(curr.price),0 ));
    },[cart]);

  return (
    <Container>
        <Navbar />
        <Announcements />
        <Title>
            YOUR BAG
        </Title>
        <Wrapper>
            <Top>
                <Link to="/productlist">
                <ShopButton>Continue Shopping</ShopButton>
                </Link>
                <WishListContainer>
                    <List>Shoppingbag</List>
                    <List>WishList</List>
                </WishListContainer>
                <CheckoutButton>Checkout Now</CheckoutButton>
            </Top>
            <Bottom>
            <Left>
                {cart.map((item)=>(
                <Product>
                    <Productimg>
                        <Img src={item.img}/>
                    </Productimg>
                    <ProductInfos>
                        <ProductInfo>
                        <Info>
                            <b>Item:</b> {item.title}
                        </Info>
                        <Info>
                            <b>ID</b>: 79213708123
                        </Info>
                        <Info>
                            <b>Category</b>: {item.category}
                        </Info>
                        </ProductInfo>
                        <PriceInfo>
                            <RemoveButton  onClick={()=>{
                             setcart(cart.filter((c)=> c.id !== item.id));
                         }}>
                                Remove
                            </RemoveButton>
                            <Count>
                                + 2 -
                            </Count>
                            <Price>
                                ${item.price}
                            </Price>
                        </PriceInfo>
                    </ProductInfos>        
                </Product>
                ))}
            </Left>
            <Right>
                <Title>
                    ORDER SUMMARY
                </Title>
                <Totals>
                    <Total>Subtotal</Total>
                    <Total>  ${total}</Total>
                </Totals>
                <Totals>
                    <Total>Estimated Shopping</Total>
                    <Total> ${total}</Total>
                </Totals>
                <Totals>
                    <Total>Discount</Total>
                    <Total>- $10</Total>
                </Totals>
                <Totals>
                    <Total>Delivery</Total>
                    <Total>$10</Total>
                </Totals>
                <Totals>
                    <Total>Total</Total>
                    <Total>${total}</Total>
                </Totals>
                <Button>Check Out</Button>
            </Right>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Carts