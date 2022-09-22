import './index.css'
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetails";
import Products from "./pages/Products";
import SubCategory from "./pages/SubCategory";
import SignUp from './pages/Authorization/SignUp';
import SignIn from './pages/Authorization/SignIn';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:categoryID" element={<SubCategory />} />
        <Route path="products/:productID" element={<Products />} />
        <Route path="products/:productID/product-detail/:product_id" element={<ProductDetail />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
