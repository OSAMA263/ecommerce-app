import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddToCart,
  Clear,
  MinusQTY,
  RemoveFromCart,
} from "../rtk/slices/CartSlice";
import { FaArrowRight, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SideCart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div id="sideBar" className="offcanvas offcanvas-start">
      <div className="offcanvas-header border-bottom shadow">
        <h5 className="offcanvas-title">
          items in cart (
          <span className="text-danger">
            {cart.reduce((acc, pro) => (acc += pro.qty), 0)}
          </span>
          )
        </h5>
        <button className="text-dark btn " data-bs-dismiss="offcanvas">
          <FaArrowRight />
        </button>
      </div>
      <div className="offcanvas-body p-0 p-sm-3">
        {/*========== products in cart====== */}
        <div className="cart d-flex flex-column gap-5">
          {cart.map((pro) => (
            <div key={pro.id} className="product d-flex border-bottom p-2">
              <div data-bs-dismiss="offcanvas">
                <Link
                  className="text-decoration-none link link-dark"
                  to={`products/${pro.id}`}
                >
                  <img width={80} src={pro.image} alt="" />
                </Link>
              </div>
              <div className="ms-3 pro-info d-flex flex-column justify-content-evenly w-100">
                <div className="d-flex justify-content-between">
                  <h6 className="fw-semibold">{pro.title}</h6>
                  <Link
                    onClick={() => {
                      dispatch(RemoveFromCart(pro));
                    }}
                    className="text-danger fs-5"
                  >
                    <FaTrashAlt />
                  </Link>
                </div>

                <div className="qty-option d-flex justify-content-between align-items-center">
                  <div className="options d-flex align-items-center btn-group">
                    <button
                      className={`btn border py-1 btn-secondary text-light ${
                        pro.qty === 1 && "opacity-50"
                      }`}
                      onClick={() => {
                        dispatch(MinusQTY(pro));
                      }}
                    >
                      -
                    </button>
                    <span className="fw-bold px-3 border-top border-bottom py-1">
                      {pro.qty}
                    </span>
                    <button
                      className="btn border py-1 btn-success text-light"
                      onClick={() => {
                        dispatch(AddToCart(pro));
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div className="pro-price fw-semibold text-secondary">
                    {pro.price.toFixed(2)} $
                  </div>
                  <div className="total-amount fw-semibold">
                    {(pro.price * pro.qty).toFixed(2)}$
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-auto d-flex flex-column px-4 pb-3 border-top border-2 shadow">
        {/* ========total amout=========== */}
        <div className="d-flex align-items-center justify-content-between py-4">
          <p className="fw-semibold m-0 text-uppercase">
            total:
            <span className="text-success fw-bold">
              {cart.reduce(
                (acc, pro) => (acc += pro.price * pro.qty),
                0
              ).toFixed(2)}
            </span>
            $
          </p>
          <button
            onClick={() => {
              dispatch(Clear());
            }}
            className="btn btn-outline-danger"
          >
            remove all
          </button>
        </div>
        <div className="d-flex" data-bs-dismiss="offcanvas" >
        <Link  to="/checkout" className="btn btn-dark w-100">checkout</Link></div>
      </div>
    </div>
  );
}
