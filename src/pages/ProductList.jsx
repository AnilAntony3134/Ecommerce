import styledComponents from "styled-components"
import { Announcements, Footer, ModernProducts, Navbar, NewsLetter } from "../components"

const Container = styledComponents.div`
  

`
const Title = styledComponents.h1`
    margin-left: 20px;
`
const FilterContainer = styledComponents.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styledComponents.div`
    margin: 20px;
`
const FilterText= styledComponents.span`
    font-size: 20px;
    font-weight: 600
`
const Select = styledComponents.select`
    padding: 10px;
    margin-left: 6px;
`
const Option = styledComponents.option`
    padding: 10px;
`


const ProductList = () => {
  return (
  
    <Container>
          <Announcements />
        <Navbar />
        <Title>Dresses</Title>
        <FilterContainer >
        <Filter>
            <FilterText>
                Filter Products
            </FilterText>
            <Select>
                <Option disabled selected>
                    Color
                </Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                <Option>Yellow</Option>
                <Option>Green</Option>
            </Select>
            <Select>
                <Option disabled selected>
                    Size
                </Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
            </Select>
        </Filter>
        <Filter>
            <FilterText> Sort Products </FilterText>
                <Select>
                <Option selected>Newest</Option>
                <Option>Price (asc)</Option>
                <Option>Price (desc)</Option>
                </Select>
           
        </Filter>
        </FilterContainer >
        {/* <Products /> */}
        <ModernProducts />
        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default ProductList