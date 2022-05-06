import { FavoriteBorderOutlined, SearchOutlined, ShoppingBasketOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styledComponents from 'styled-components'

const Info = styledComponents.div`
    background-color: rgba(0, 0, 0, 0.2);
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display:flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    transition: all 0.5s ease;
    // background-color:rgba(0,0,0,0.2);
`
const Container = styledComponents.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: #f5fbfd;
    &:hover ${Info}{
        opacity: 1;
    }
`
const Circle = styledComponents.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;

`
const Image = styledComponents.img`
    height: 75%;
    z-index: 2;

`

const Icon = styledComponents.div`
    width: 40px;
    height: 40px;
    margin: 10px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
        transform: scale(1.2);
    }
`;
const Product = ({item}) => {
  return (
    <Container>
        <Circle />
        <Image src={item.img}/>
        <Info>
        <Icon>
          <ShoppingBasketOutlined />
        </Icon>
        <Icon>
            <Link to={`/product/${item.id}`}>
          <SearchOutlined />
             </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;