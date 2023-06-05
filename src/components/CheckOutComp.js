import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Clear } from "../rtk/slices/CartSlice";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function CheckOutComp() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const [User, setUser] = useState({});
  const navigate = useNavigate();
  const input = useRef([]);
  const TotalAmount = products
    .reduce((acc, pro) => (acc += pro.price * pro.qty), 0)
    .toFixed(2);

  const updateData = (e) => {
    setUser({
      ...User,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setIsActive(true);
    setTimeout(() => {
      dispatch(Clear());
      navigate("/products");
      console.log([User, products]);
      setIsActive(false);
    }, 3000);
  };
  // form data
  const formData = [
    { div: "col-6", type: "text", label: "First Name" },
    { div: "col-6", type: "text", label: "Last Namee" },
    { div: "col-6", type: "number", label: "Phone Number" },
    { div: "col-6", type: "email", label: "Email Address" },
    { div: "col-12", type: "text", label: "Full Address" },
    { div: "col-4", type: "text", label: "City" },
    { div: "col-4", type: "text", label: "State" },
    { div: "col-4", type: "number", label: "Zip Code" },
  ];
  const parentFormVariants = {
    init: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const inputChildren = {
    init: {
      opacity: 0,
      x: -40,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
      },
    },
  };

  return (
    <>
      {/* modal */}
      {isActive && (
        <motion.div
          initial={{ opcity: 0 }}
          animate={{ opacity: 1 }}
          className="position-fixed top-0 d-flex justify-content-center vw-100 vh-100"
          id="modal"
        >
          <motion.div
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4 }}
            id="modal-body"
            className="p-5 my-auto text-center flex-column align-items-center d-flex rounded-3"
          >
            <h3>Thank you For shopping With Us lad</h3>
            <small>(data loged in consol)</small>
          </motion.div>
        </motion.div>
      )}
      <div className="container-md">
        <div
          style={{ backgroundColor: "rgba(60, 60, 60, 0.06)"}}
          className="my-8 row h-100 mx-auto d-flex rounded-4 justify-content-between "
        >
          <div className="border col-lg-7 col-12 rounded-2 p-3">
            <div className="col-12 mb-3o border-bottom">
              <h3 className="fw-bold">Basic Info</h3>
            </div>
            {/* form */}
            <motion.form
              variants={parentFormVariants}
              initial="init"
              animate="animate"
              onSubmit={submitHandler}
              className="row"
              action=""
            >
              {formData.map(({ div, type, label }, i) => (
                <motion.div
                  variants={inputChildren}
                  key={i}
                  className={`my-2 ${div}`}
                >
                  <label
                    htmlFor=""
                  >
                    {label}
                  </label>
                  <input
                    ref={(e) => (input[i] = e)}
                    required
                    className="form-control py-2"
                    onChange={updateData}
                    type={type}
                    name={label}
                  />
                </motion.div>
              ))}
              <div className="col-12 mt-3">
                <button
                  className="w-100 btn btn-info text-light"
                  data-bs-target="#Modal"
                  data-bs-toggle
                  type="submit"
                >
                  Place Order
                </button>
              </div>
            </motion.form>
          </div>
          {/* products in order */}
          <div className="col-lg-5 col-12 overflow-scroll" style={{height:"457px",overflowX:"hidden"}}>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {products.map(({ image, price, qty, id }) => (
                  <tr className="fw-semibold text-center" key={id}>
                    <td className="w-35"><img src={image} className="w-md-35 w-25" alt="" /></td>
                    <td>{price.toFixed(2)} $</td>
                    <td>{qty}</td>
                    <td>{price * qty} $</td>
                  </tr>
                ))}
                <tr className="fw-bold text-center">
                  <td colSpan="4">Total Amount : <span className="text-success">{TotalAmount}</span> $</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
