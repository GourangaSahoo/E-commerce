import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Login from './Pages/Login'
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="mens" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="womens" />} />
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid" />} />
          <Route path="/product" element={<Product />} >
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/Sign-up" element={<LoginSignup />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
