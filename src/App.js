import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./styles/custom.css";
import "./styles/main.scss";
import Navbar from "./components/navbar";
import SideCart from "./components/SideCart";
import Footer from "./components/footer";
import React, { useEffect } from "react";
import Home from "./components/pages/home";
import Products from "./components/pages/Products";
import About from "./components/pages/about";
import { Route, Routes, useLocation } from "react-router-dom";
import ViewProduct from "./components/ViewProduct";
import { AnimatePresence } from "framer-motion";
import ScrollToTopBtn from "./components/ScrollToTopBtn";
import CheckOutComp from "./components/CheckOutComp";
import { useSelector } from "react-redux";

export const imgHeroStyle = {
  maxHeight: "75vh",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

function App() {
  // update the LS cart
  const cart = useSelector((state) => state.myCart);
  useEffect(() => {
    localStorage.setItem("myCart", JSON.stringify(cart));
  }, [cart]);

  const location = useLocation();
  return (
    <div className="App">
      <ScrollToTopBtn />
      <Navbar />
      <SideCart />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/:productID" element={<ViewProduct />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/checkout" element={<CheckOutComp />}></Route>
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
