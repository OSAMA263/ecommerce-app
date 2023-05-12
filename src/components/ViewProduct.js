import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AddToCart } from "../rtk/slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa";
import diplayedImg2 from "../imgs/pro-details-img2.png";
import diplayedImg3 from "../imgs/pro-details-img3.png";
import { RxPlusCircled } from "react-icons/rx";
import { motion } from "framer-motion";

// view products simler to the category============================================
export default function ViewProduct() {
  const { productID } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  // fetch to get the product
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + productID)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setDisplayedImg(data.image);
      });
  }, [productID]);

  // alert
  const [alertVisible, setAlertVisible] = useState(false);
  setTimeout(() => {
    setAlertVisible(false);
  }, 4000);

  // update the LS cart
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // change product image on click
  const imgs = [
    { id: 0, src: product.image },
    { id: 1, src: diplayedImg2 },
    { id: 2, src: diplayedImg3 },
  ];
  const [displayedImg, setDisplayedImg] = useState();
  const changeImgHandler = (img) => {
    setDisplayedImg(img.src);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="d-flex align-items-center justify-content-center">
        <div className="h-100 vh-md-85 d-flex justify-content-center my-6">
          <div className="my-auto h-xl-50 h-100 flex-column flex-lg-row align-items-center d-flex container-lg justify-content-center justify-content-md-evenly">
            <div className="d-flex align-items-center gap-4 w-md-50">
              <div className="pro-imgs w-md-auto w-65 align-items-center d-flex gap-4 flex-column">
                {imgs.map((img) => (
                  <img
                    key={img.id}
                    onClick={(e) => {
                      changeImgHandler(e.target);
                    }}
                    src={img.src}
                    width={80}
                    id="detail-imgs"
                    height={80}
                    className={`rounded-4 pro-details-imgs ${
                      img.src === displayedImg && "active"
                    }`}
                    alt=""
                  />
                ))}
              </div>
              <div className="d-flex w-100 align-items-center">
                <img
                id="displayed-image"
                width={240}
                height={290}
                  src={displayedImg}
                  className="ms-4 border rounded-4"
                  alt=""
                />
              </div>
            </div>
            {/* ===========add to cart btn========== */}
            <div className="w-md-65 w-sm-85 justify-content-center mt-4 product-info w-lg-35 gap-3 d-flex flex-column">
              <h2 className="text-dark fw-semibold">{product.title}</h2>
              <h4 className="text-danger fw-bold">{product.price} $</h4>
              <p className="text-muted fw-semibold">{product.description}</p>
              <button
                onClick={() => {
                  dispatch(AddToCart(product));
                  setAlertVisible(true);
                }}
                className="btn-dark btn text-light mx-auto w-50 fw-semibold"
              >
                <RxPlusCircled className="fw-bold fs-4" /> Add to cart
              </button>
            </div>
            {/*================= alert ============*/}
            <div className="position-fixed w-auto justify-content-end p-6 start-0 d-flex flex-column h-50 bottom-0">
              {alertVisible && (
                <div className="alert alert-success">
                  <span className="fs-5 text-success">
                    <FaCheck />
                  </span>
                  item added to cart
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
