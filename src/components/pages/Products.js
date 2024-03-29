import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import background from "../../imgs/products-bg.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rtk/slices/ProductsSlice";
import { RxPlusCircled } from "react-icons/rx";
import { AddToCart } from "../../rtk/slices/CartSlice";
import { IoIosEye } from "react-icons/io";
import Pagination from "../Pagination";
import { AnimatePresence, motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hero_pages from "../Hero_pages";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const [isActive, setIsActive] = useState("all");
  
  const [CurrentPage, setCurrentPage] = useState(1);
  const [ItemsPerPage, setItemsPerPage] = useState(9);
  const lastIndex = CurrentPage * ItemsPerPage;
  const firstIndex = lastIndex - ItemsPerPage;
  const [cloneProducts, setCloneProducts] = useState([]); // clone products state
  const currentItems = cloneProducts.slice(firstIndex, lastIndex);

  const categories = [...new Set(products.map(({ category }) => category))];
  // change the products displayed depends on curr page

  useEffect(() => {
    setCloneProducts(products.slice(firstIndex, lastIndex));
  }, []);

  // alert
  const notify = (title) =>
    toast.success(title, {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
    });

  //filter product
  const btnsFilterHandler = (cat) => {
    setCurrentPage(1);
    setCloneProducts(products.filter((pro) => pro.category === cat));
  };
  const selectFilterHandler = (val) => {
    setCurrentPage(1);
    val === "all"
      ? setCloneProducts(products)
      : setCloneProducts(products.filter((pro) => pro.category === val));
  };

  // fetch to dispaly slice products
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  useEffect(() => {
    setCloneProducts(products);
  }, [products]);

  // animation products
  const parentVariants = {
    init: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.4,
        delay: 0.4,
      },
    },
  };
  const productVariants = {
    init: {
      x: -50,
      opacity: 0,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
    exit: {
      x: 50,
      opacity: 0,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="about-page my-4">
        <div
          style={{
            background: "#b8d7dd",
          }}
        >
          <div className="vh-75 d-flex justify-content-evenly align-items-center container-fluid-xl">
            <div className="w-lg-50 w-75 d-none d-md-block h-xl-100 h-75 mt-auto overflow-hidden d-flex">
              {/*=========== hero ===========*/}
              <Hero_pages cls="w-100 w-xl-auto mt-auto" url={background}/>
            </div>
            <div className="text-uppercase d-flex flex-column">
              <h1 className="display-4 fw-light mb-0">Lorem, ipsum dolor.</h1>
              <h1 className="fw-bold mb-4 display-5">somthing</h1>
              <div className="d-flex">
                <Link href="" className="discover_more fw-bold">
                  idk somewhere
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*=========== filter products ===========*/}
        <div className="my-4 d-flex flex-column justify-content-center">
          <div className="d-none d-md-flex gap-3 bg-secondary d-flex mx-auto p-2 rounded bg-opacity-25 ">
            {categories.map((cat) => (
              <button
                className={`btn px-3 fw-semibold rounded-pill ${
                  isActive === cat ? "btn-dark" : "btn-secondary"
                }`}
                key={cat}
                onClick={() => {
                  btnsFilterHandler(cat);
                  setIsActive(cat);
                }}
              >
                {cat} (
                {
                  products.filter((pro) => pro.category === cat && products)
                    .length
                }
                )
              </button>
            ))}
            <button
              className={`btn px-3 fw-semibold rounded-pill ${
                isActive === "all" ? "btn-dark" : "btn-secondary"
              }`}
              onClick={() => {
                setCloneProducts(products);
                setIsActive("all");
              }}
            >
              all ({products.length})
            </button>
          </div>
          {/* mobile filter */}
          <div className="d-flex w-35 mx-auto">
            <select
              onChange={(e) => {
                selectFilterHandler(e.target.value);
              }}
              className="w-100 form-select my-3 bg-dark text-light d-blobk d-md-none"
            >
              <option value={"all"}>all</option>
              {categories.map((cat, i) => (
                <option key={i} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="py-3" style={{ backgroundColor: "#f5f5f5" }}>
          <motion.div
            variants={parentVariants}
            initial="init"
            animate="animate"
            className="row mt-6 justify-content-evenly gap-4 g-3 w-md-75 w-sm-50 w-85 mx-auto"
          >
            {/*=========== display products ===========*/}
            {currentItems.length > 0 ? (
              <AnimatePresence mode="wait">
                {currentItems.map((pro) => (
                  <motion.div
                    variants={productVariants}
                    initial="init"
                    animate="animate"
                    exit="exit"
                    key={pro.id}
                    className="col-xl-3 col-md-5"
                    id="product"
                  >
                    <div className="card shadow-sm rounded-top rounded-5 border position-relative h-100 py-3 px-3">
                      <img
                        width={160}
                        height={140}
                        src={pro.image}
                        alt="img didnt load bruv"
                        className="card-img-to"
                      />
                      <div className="card-body px-0 pt-4 d-flex flex-column">
                        <div className="mt-auto">
                          <p className="text-muted mt-3">{pro.category}</p>
                          <h5 className="fw-semibold">
                            {pro.title.length > 30
                              ? pro.title.slice(0, 30) + "..."
                              : pro.title}
                          </h5>
                          <p className="fw-semibold m-0 text-danger-emphasis">
                            {pro.price} $
                          </p>
                        </div>
                        <div
                          id="option-btns"
                          className="position-absolute btn-group overflow-hidden rounded-start top-0 d-flex flex-column end-0"
                        >
                          {/*=========== add to cart btn ===========*/}
                          <button
                            onClick={() => {
                              dispatch(AddToCart(pro));
                              notify(pro.title);
                            }}
                            className="fs-3 rounded-0 border-0 btn btn-danger"
                          >
                            <RxPlusCircled />
                          </button>
                          <Link
                            to={`${pro.id}`}
                            className="fs-3 rounded-0 border-0 btn btn-secondary"
                          >
                            <IoIosEye />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            ) : (
              <div className="d-flex justify-content-center">
                <h3 className="fw-bold">empty</h3>
              </div>
            )}
            {/*=============== alert ========*/}
            <div className="position-fixed w-auto justify-content-end p-6 start-0 d-flex flex-column h-50 bottom-0">
              <ToastContainer
                position="bottom-left"
                autoClose={2000}
                limit={8}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </div>
            {/* =========pages============= */}
            <div className="d-flex gap-3 justify-content-center align-items-center">
              <Pagination
                itemsPerPage={ItemsPerPage}
                setCurrentPage={setCurrentPage}
                totalItems={products.length}
                CurrentPage={CurrentPage}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
