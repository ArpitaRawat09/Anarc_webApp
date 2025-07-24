import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Hero from "./pages/Hero";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetailPage";

const App = () => {
  return (
    <div className=" bg-white w-full min-h-screen">
      <Navbar />
      <Home />
      <Hero />
      <Gallery />
      <ProductDetailPage />
      <Footer />
    </div>
  );
};

export default App;
