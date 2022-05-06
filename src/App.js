import { BrowserRouter, Route , Routes } from "react-router-dom";
import "./App.css";
import { Cart, Carts, Home, Product, ProductList, Register, SignIn } from "./pages";

function App() {
  return (
      <BrowserRouter>
    <div className="App">
    {/* <Home />  */}
        <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/productlist' element={<ProductList />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Carts />} />
        </Routes>
      {/* */}
      {/* <ProductList /> */}
      {/* <Product /> */}
      {/* <Register /> */}
      {/* <SignIn /> */}
      {/* <Cart /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
