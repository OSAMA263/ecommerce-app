import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Clear } from "../rtk/slices/CartSlice";
import { useLocation, useNavigate } from "react-router-dom";

export default function CheckOutComp() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const [User, setUser] = useState({});
  const navigate = useNavigate();
  const { pathname } = useLocation();

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

  return (
    <>
      {/* modal */}
      <div
        style={isActive ? { visibility: "visible", opacity: "1" }:null}
        className="position-fixed top-0 d-flex justify-content-center vw-100 vh-100"
        id="modal"
      >
        <div
          id="modal-body"
          className="p-5 my-auto text-center flex-column align-items-center d-flex rounded-3"
        >
          <h3>Thank you For shopping With Us lad</h3>
          <small>(data loged in consol)</small>
        </div>
      </div>
      <div className="my-8 row h-100 mx-auto d-flex justify-content-between container-md">
        <div className="border col-lg-7 col-12 rounded-2 p-3">
          <div className="col-12 mb-3 border-bottom">
            <h3 className="fw-bold">Basic Info</h3>
          </div>
          <form onSubmit={submitHandler} className="row" action="">
            <div className="col-6 mb-3">
              <label className="form-label" htmlFor="">
                First Name
              </label>
              <input
              required
                onChange={updateData}
                name="FirstName"
                className="form-control"
                type="text"
                placeholder=""
              />
            </div>
            <div className="col-6 mb-3">
              <label className="form-label" htmlFor="">
                Last Name
              </label>
              <input
              required
                onChange={updateData}
                name="LastName"
                className="form-control"
                type="text"
                placeholder=""
              />
            </div>
            <div className="col-6 mb-3">
              <label className="form-label" htmlFor="">
                Phone Number
              </label>
              <input
              required
                onChange={updateData}
                name="PhoneNumber"
                className="form-control"
                type="number"
                placeholder="0123456789"
              />
            </div>
            <div className="col-6 mb-3">
              <label className="form-label" htmlFor="">
                Email Address
              </label>
              <input
              required
                onChange={updateData}
                name="Email"
                className="form-control"
                type="email"
                placeholder="myname@example.com"
              />
            </div>
            <div className="col-12 mb-3">
              <label htmlFor="" className="form-label">
                Full Address
              </label>
              <textarea
                name="address"
                onChange={updateData}
                className="form-control"
              ></textarea>
            </div>
            <div className="col-4">
              <label htmlFor="" className="form-label">
                City
              </label>
              <input
              required
                onChange={updateData}
                name="city"
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-4">
              <label htmlFor="" className="form-label">
                State
              </label>
              <input
              required
                onChange={updateData}
                name="state"
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-4">
              <label htmlFor="" className="form-label">
                Zip Code
              </label>
              <input
              required
                onChange={updateData}
                maxLength="5"
                name="Zcode"
                type="number"
                className="form-control"
              />
            </div>
            <div className="col-12 mt-3">
              <button
                className="w-100 btn btn-primary"
                data-bs-target="#Modal"
                data-bs-toggle
                type="submit"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
        {/* products in order */}
        <div className="col-lg-5 col-12">
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
              {products.map(({ title, price, qty, id }) => (
                <tr className="fw-semibold" key={id}>
                  <td className=" w-35">{title}</td>
                  <td>{price.toFixed(2)} $</td>
                  <td>{qty}</td>
                  <td>{price * qty} $</td>
                </tr>
              ))}
              <tr className="fw-bold text-center">
                <td colSpan="4">Total Amount : {TotalAmount} $</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
