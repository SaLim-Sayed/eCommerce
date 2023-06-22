import React, { useEffect, useState } from "react";
import Product from "./Product";
import CircularProgress from "@mui/material/CircularProgress";

import Backdrop from "@mui/material/Backdrop";
import { Button } from "react-bootstrap";

function ProductsList() {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const api_url = "https://fakestoreapi.com/products";

  const getAllProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
        setOpen(true);
      });
  };
  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
        setOpen(true);
      });
  };
  const filterProduct = (categoryName) => {
    fetch(`${api_url}/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
        setOpen(true);
      });
  };
  useEffect(() => {
    getAllProducts();
    getCategories();

    setOpen(true);
  }, []);

  return (
    <div
      className=" mx-5 text-center "
      style={{
        backgroundColor: "#85b2af",
        color: "#fff",
        minHeight: "645px",
      }}
    >
      {open === false ? (
        <>
          <h2>Our Products</h2>{" "}
          <button
            className="btn active  m-2  p-2"
            style={{
              backgroundColor: "#FF8E42",
              color: "#FFFFFF",
              fontSize: 25,
              
            }} 
            onClick={() => getAllProducts()}
          >
            All
          </button>
        </>
      ) : (
        <h2>Loading...</h2>
      )}

      <>
        {categories.map((category) => {
          return (
            <button
              className="btn   m-2  p-2"
              style={{
                backgroundColor: "#FF8E42",
                color: "#FFFFFF",
                fontSize: 25,
              }}
              onClick={() => filterProduct(category)}
              key={category}
            >
              {category}
            </button>
          );
        })}
        <div>
          <div className="row">
            {products.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
        <div className="text-center"></div>

        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </>
    </div>
  );
}

export default ProductsList;
