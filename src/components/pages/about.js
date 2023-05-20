import React from "react";
import { imgHeroStyle } from "../../App";
import background from "../../imgs/about-bg.png";
import about1 from "../../imgs/about-img.jpg";
import about2 from "../../imgs/about-img1.jpg";
import about3 from "../../imgs/about-img2.png";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section>
        <div
          style={{
            backgroundImage: " linear-gradient(#d4b3b1,#e8e7e7,#d4b3b1)",
          }}
          className="vh-75"
        >
          <div className="w-100 w-md-100 h-100 justify-content-center flex-column d-flex">
            <img
              src={background}
              style={imgHeroStyle}
              alt=""
              className="w-sm-auto w-lg-75 h-md-auto mt-auto d-none d-sm-block h-85 "
            />
            <div className="text-uppercase w-100 text-center gap-3 d-flex flex-column d-sm-none">
              <p className="fs-3 lead">about us</p>
              <h1 style={{fontFamily:"Papyrus"}} className="fw-semibold display-1 lead ">company name</h1>
              <p className="fs-3 lead">is the right choice</p>
            </div>
          </div>
        </div>
        <div className="mt-7 text-center w-65 container mb-6 about">
          <h2 className="fw-bold text-uppercase mb-5">company name</h2>
          <p className="fw-semibold lean">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            distinctio aliquam, excepturi voluptate corporis animi eius totam
            nesciunt quos quis minima doloremque natus, dolore ullam eaque?
            Minus facere eveniet commodi, doloremque alias repudiandae aliquid
            iure ea. Voluptates hic nemo itaque deserunt expedita, iste minima
            dolorem asperiores dolores aspernatur. Incidunt, quo?
          </p>
        </div>
        {/* =========== */}
        <div className="container text-center">
          <div className="row align-items-center justify-content-between border-bottom border-2 my-6 pb-6">
            <div className="col-md-5 col-12 my-4">
              <img className="w-md-65 w-100 h-100" src={about2} alt="" />
            </div>
            <div className="col-md-5 col-12">
              <h4 className="fw-bold text-capitalize mb-4">Lorem, ipsum.</h4>
              <p className="fw-semibold lh-md lean">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                natus accusamus doloremque nam hic perspiciatis quas recusandae
                aliquid necessitatibus, possimus mollitia veniam cum doloribus
                laborum, quis ipsum ab? Numquam nihil voluptates quisquam
                laboriosam natus officiis esse, nesciunt sequi quam nobis.
              </p>
            </div>
          </div>
          {/* =========== */}
          <div className="row align-items-center justify-content-between border-bottom border-2 my-6 pb-6">
            <div className="col-md-5 col-15">
              <h4 className="fw-bold text-capitalize mb-4">Lorem, ipsum.</h4>
              <p className="fw-semibold lh-md lean">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                natus accusamus doloremque nam hic perspiciatis quas recusandae
                aliquid necessitatibus, possimus mollitia veniam cum doloribus
                laborum, quis ipsum ab? Numquam nihil voluptates quisquam
                laboriosam natus officiis esse, nesciunt sequi quam nobis.
              </p>
            </div>
            <div className="col-md-5 col-12 my-4">
              <img className="w-md-65 w-100 h-100" src={about1} alt="" />
            </div>
          </div>
          {/* =========== */}
          <div className="row align-items-center justify-content-between border-bottom border-2 my-6 pb-6">
            <div className="col-md-5 col-12 my-4">
              <img className="w-md-65 w-100 h-100" src={about3} alt="" />
            </div>
            <div className="col-md-5 col-12">
              <h4 className="fw-bold text-capitalize mb-4">Lorem, ipsum.</h4>
              <p className="fw-semibold lh-md lean">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                natus accusamus doloremque nam hic perspiciatis quas recusandae
                aliquid necessitatibus, possimus mollitia veniam cum doloribus
                laborum, quis ipsum ab? Numquam nihil voluptates quisquam
                laboriosam natus officiis esse, nesciunt sequi quam nobis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
