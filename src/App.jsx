import { ThemeProvider, CssBaseline } from "@mui/material";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./Components/HomeLayout/HomeLayout";
import HomePage from "./Components/pages/HomePage";
import theme from "./theme";
import ProductList from "./Components/ProductList/ProductList";
import ProductListByCategory from "./Components/ProductListByCategory/ProductListByCategory";
import CartPage from "./Components/pages/CartPage";
import CheckoutPage from "./Components/pages/CheckoutPage";
import SingleProduct from "./Components/pages/SingleProduct";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<HomePage/>}/>
            <Route path="everything" element={<ProductList/>}/>
            <Route path="product-category/:categoryName" element={<ProductListByCategory/>}/>
            <Route path="cart" element={<CartPage/>}/>
            <Route path="checkout" element={<CheckoutPage/>}/>
            <Route path="product/:id" element={<SingleProduct/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            

          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
