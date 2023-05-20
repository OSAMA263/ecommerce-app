import React, { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function ScrollToTopBtn() {
  const [displayed, setDisplayed] = useState(false);

  const btnHandler = () => {
    window.scrollY > 40 ? setDisplayed(true) : setDisplayed(false);
  };
  window.addEventListener("scroll", btnHandler);

  return (
    <button
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      style={{ transition: "all .5s ease" }}
      className={`position-fixed bottom-0 end-0 mb-sm-5 me-sm-5 rounded-pill btn btn-dark px-2 py-1 border-2 border border-dark ${
        !displayed && "invisible opacity-0"
      }`}
    >
      <AiOutlineArrowUp className="fw-bold f-5" />
    </button>
  );
}
