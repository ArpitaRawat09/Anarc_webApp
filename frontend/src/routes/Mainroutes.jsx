import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetailPage from "../pages/ProductDetailPage";
import About from "../pages/About";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId" element={<ProductDetailPage />} />
      
      {/* Optional: Catch-all route for 404 */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default Mainroutes;


