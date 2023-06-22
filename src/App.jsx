import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductsList from "./components/ProductsList";
import NavBar from "./utils/NavBar";
import Slider from "./utils/Slider";
import ProductDetails from "./components/ProductDetails";
import Footer from "./utils/Footer";

function App() {
  return (
    <div className="App"  style={{ backgroundColor: "#1c6266" ,marginBottom:"0px"}}>
      <NavBar />
      <Routes>
        <Route  path="/*" element={<Slider />} />
        <Route  path="/eCommerce" element={<Slider />} />
        <Route path="/eCommerce/products" element={<ProductsList/>} />
        <Route path="/eCommerce/product/:productId" element={<ProductDetails/>} />
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
