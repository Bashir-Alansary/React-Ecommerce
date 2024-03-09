import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ShopCategory from "./pages/ShopCategory/ShopCategory";
import womenBanner from "./Components/Assets/images/women_banner.png";
import menBanner from "./Components/Assets/images/men_banner.png";
import kidsBanner from "./Components/Assets/images/kids_banner.png";
import WishList from "./Components/WishList/WishList";
import Compare from "./Components/Compare/Compare";
import Shop from "./Components/Shop/Shop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<ShopCategory category = "Men" img = {menBanner} />} />
          <Route path="/women" element={<ShopCategory category = "Women" img = {womenBanner} />} />
          <Route path="/kids" element={<ShopCategory category = "Kids" img = {kidsBanner} />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product" element={<Product />} >
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/compare" element={<Compare />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
