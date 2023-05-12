import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";
import { RxFramerLogo } from "react-icons/rx";
import { GiShoppingCart } from "react-icons/gi";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [navBg, setNavBg] = useState("");
  const {pathname} = useLocation();
  const cart = useSelector((state) => state.cart);
  //=============== change navbar style===========
  useEffect(() => {
    if (pathname === "/about") {
      setNavBg("#d4b3b1");
    } else if (pathname === "/") {
      setNavBg("#d1bba7");
    } else if (pathname === "/products") {
      setNavBg("#a2b8c3");
    }
   
    // scroll to the top page
    window.scrollTo(0,0)
  }, [pathname]);
  const navabrStyle = {
    nav: {
      backgroundColor: navBg,
      transition: "background .5s ease",
    },
  };
  const navbarHandler = () => {
    window.scrollY > 0 ? setNavbar(true) : setNavbar(!navbar);
  };
  window.addEventListener("scroll", navbarHandler);

  return (
    <>
      <IconContext.Provider value={{ color: "black", size: "2.6rem" }}>
        <nav
          style={
            navbar
              ? navabrStyle.nav
              : { backgroundColor: "#fff", transition: "background .5s ease" }
          }
          className="navbar-style shadow navbar py-3 fixed-top navbar-expand-lg"
        >
          <div className="container w-65">
            <Link className="fw-bold navbar-brand" to="/">
              <RxFramerLogo />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`text-center collapse navbar-collapse`}
              id="navbar"
            >
              {/* ===========nav links=============== */}
              <ul className="list-unstyled navbar-nav justify-content-center mb-2 d-flex gap-3 mb-lg-0 mx-auto">
                <li className="nav-item">
                  <NavLink className="fw-semibold nav-link p-0 m-2" to="/">
                    <span data-bs-toggle="collapse" data-bs-target="#navbar"> Home</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="fw-semibold nav-link p-0 m-2" to="/products">
                    <span data-bs-toggle="collapse" data-bs-target="#navbar"> products</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="fw-semibold nav-link p-0 m-2 " to="/about">
                    <span data-bs-toggle="collapse" data-bs-target="#navbar"> about</span>
                  </NavLink>
                </li>
              </ul>
              <Link
                className="position-relative"
                data-bs-toggle="offcanvas"
                data-bs-target="#sideBar"
              >
                <GiShoppingCart />
                <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}
