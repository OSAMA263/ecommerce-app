import { Link } from "react-router-dom";
import background from "../../imgs/home-bg.png";
import { imgHeroStyle } from "../../App";
import { useEffect } from "react";
import { fetchProducts } from "../../rtk/slices/ProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section>
        <div
          style={{
            backgroundImage: " linear-gradient(#ebded1,#edecea,#ebded1)",
          }}
        >
          {/* ===========header=========== */}
          <div className="vh-75 align-items-center d-flex overflow-hidden justify-content-evenly container-lg">
            <div className="text-uppercase d-flex flex-column w-85 w-md-auto">
              <span className="fw-bold blockquote-footer">new trend</span>
              <h1 className="display-3 fw-light mb-0">company name stylish</h1>
              <h1 className="fw-bold mb-4 display-4">womens</h1>
              <div className="d-flex">
                <Link href="" className="discover_more fw-bold">
                  discover more
                </Link>
              </div>
            </div>
            <div className="w-md-auto d-none d-md-block w-50">
              <img style={imgHeroStyle}src={background} alt="" />
            </div>
          </div>
        </div>
        {/*=========== display products ===========*/}
        <div className="d-flex mt-6 justify-content-center ">
          <h1 className="text-uppercase fw-bold border-bottom border-secondary py-3">
            new products
          </h1>
        </div>
        <div className="mt-3" style={{backgroundColor:"rgba(245, 238, 231, 0.71)"}}>
        <div className="row justify-content-evenly gap-3 g-3 w-65 mx-auto">
          <div className="front-card"></div>
          <div className="back-card"></div>
          {products.length > 0 ? (
            products.slice(10, 19).map((pro) => (
              <div key={pro.id} className="col-xl-3 col-lg-5 col-sm-6 col-12" id="home-product">
                <div
                  className="flip-card mb-4"
                  style={{
                    perspective: "400px",
                    height: "280px",
                  }}
                >
                  <div
                    style={{
                      transformStyle: "preserve-3d",
                      transition: "1s ease",
                    }}
                    className="card h-100 w-100 shadow-sm rounded-5 position-relative"
                  >
                    <div className="card-back bg-dark rounded-5 position-absolute h-100 w-100 d-flex justify-content-center align-items-center flex-column p-3 text-center gap-3">
                      <h5 className="fw-bold text-light">{pro.title}</h5>
                      <Link
                        to={`products/${pro.id}`}
                        className="btn btn-outline-light rounded-4"
                      >
                        more details
                      </Link>
                    </div>
                    <div className="card-front rounded-5 position-absolute p-3 h-100 w-100 d-flex justify-content-center">
                      <img className="w-100" src={pro.image} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="d-flex justify-content-center">
              <h3 className="fw-bold">Loading...</h3>
            </div>
          )}
        </div></div>
      </section>
    </motion.div>
  );
}
