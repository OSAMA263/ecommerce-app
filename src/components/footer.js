import React from "react";
import {
  FaInstagramSquare,
  FaTwitterSquare,
  FaFacebookSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-top border-2 pt-5 mt-5">
      <div className="bg-opacity-75 bg-secondary text-center d-flex gap-4 p-5 flex-column justify-content-between">
        <div className="d-flex justify-content-center gap-4 align-items-center">
          <ul className="d-flex list-unstyled gap-3">
            <li className="position-relative">
              <FaFacebookSquare
                id="facebook-link"
                className="fs-2 text-light bg-dark rounded-2"
              />
            </li>
            <li className="position-relative">
              <FaTwitterSquare
                id="twitter-link"
                className="fs-2 text-light bg-dark rounded-2"
              />
            </li>
            <li className="position-relative">
              <FaInstagramSquare
                id="instagram-link"
                className="fs-2 text-light bg-dark rounded-2"
              />
            </li>
          </ul>
        </div>
        <h5 className="text-light text-capitalize">
        design by osam263 shop 2023. all rights reserved
        </h5>
      </div>
    </footer>
  );
}
