import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function SearchByTitle() {
  const products = useSelector((state) => state.products);
  const [cloneProducts, setCloneProducts] = useState(products);
  const [isActive, setIsAcrive] = useState(false);
  const input = useRef({});
  const filterhanlder = (e) => {
    setCloneProducts(
      products.filter((pro) =>
        pro.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    e.target.value.length > 0 ? setIsAcrive(true) : setIsAcrive(false);
  };

  return (
    <div className="position-relative">
      <input
        ref={input}
        type="search"
        placeholder="Search..."
        className="form-control rounded-pill bg-secondary bg-opacity-25"
        onChange={(e) => filterhanlder(e)}
      />
      <div
        style={{ overflowX: "hidden", zIndex: "1000" }}
        className={`vh-65 mt-2 vw-lg-25 vw-md-35 vw-sm-45 position-absolute bg-light p-md- rounded-2 ${
          isActive ? "d-block" : "d-none"
        }`}
      >
        {cloneProducts.length > 0 ? (
          cloneProducts.map((pro) => (
            <NavLink
              onClick={() => {
                input.current.value = "";
                setIsAcrive(false);
              }}
              id="item"
              to={`products/${pro.id}`}
              className="d-flex text-decoration-none text-dark align-items-center p-3 border-bottom"
              key={pro.id}
            >
              <img alt="proimg" className="w-25 h-50" src={pro.image} />
              <h5 className="ms-3">{pro.title}</h5>
            </NavLink>
          ))
        ) : (
          <h5 className="text-center">"(0) products was found"</h5>
        )}
      </div>
    </div>
  );
}
