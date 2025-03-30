import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./header";
import Home from "./home";
import Products from "./products";
import Services from "./services";
import About from "./about";
import Contact from "./contact";
import Footer from "./footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
