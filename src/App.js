import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SubCategory from "./pages/SubCategory";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/:categoryID" element={<SubCategory />} />
        <Route path="products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
