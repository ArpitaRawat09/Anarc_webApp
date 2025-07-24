import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Hero from "./pages/Hero";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetailPage";
import ScrollContainer from "./components/layout/ScrollContainer";

const App = () => {
  return (
    <div className=" bg-white w-full min-h-screen">
      <ScrollContainer>
        <Navbar />
        <Home />
        <Hero />
        <Gallery />
        <ProductDetailPage />
        <Footer />
      </ScrollContainer>
    </div>
  );
};

export default App;
