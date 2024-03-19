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
import shopBanner from "./Components/Assets/images/shop_banner.png";
import WishList from "./Components/WishList/WishList";
import Compare from "./Components/Compare/Compare";
import Shop2 from "./Components/Shop2/Shop2";
import Search from "./Components/Search/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/*<Route path="/men" element={<ShopCategory category = "Men" img = {menBanner} />} />
          <Route path="/women" element={<ShopCategory category = "Women" img = {womenBanner} />} />
          <Route path="/kids" element={<ShopCategory category = "Kids" img = {kidsBanner} />} />*/}
          <Route path="/shop" element={<Shop2 category = "Shop" img = {shopBanner} />}  />
          <Route path="/men" element={<Shop2 category = "Men" img = {menBanner}/>} />
          <Route path="/women" element={<Shop2 category = "Women" img = {womenBanner}/>} />
          <Route path="/kids" element={<Shop2 category = "Kids" img = {kidsBanner} />} />
          <Route path="/product" element={<Product />} >
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
