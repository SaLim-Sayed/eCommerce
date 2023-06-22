import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";

function ProductDetails() {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  const [product, setProduct] = useState([]);
  let param = useParams();
  const API = `https://fakestoreapi.com/products/${param.productId}`;
  console.log(param);

  useEffect(() => {
    setOpen(true);
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setOpen(false);
      });
  }, [API]);
  console.log(product);
  return (
    <div
      style={{
        margin: "auto",
        paddingTop: "5px",
        minHeight: "646px",
        backgroundColor: "#c9e5e5",
      }}
    >
      <div
        className="container card my-2"
        style={{
          maxWidth: "1100px",
          maxHeight: "300px",
          backgroundColor: "#c9e5e5",
        }}
      >
        <div className="row">
          <h2
            className="card-header"
            style={{ backgroundColor: "#1c6266", color: "#fff" }}
          >
            {product.title}
          </h2>
          <div className="col-md-4" style={{ backgroundColor: "#ECE9EC" }}>
            <img
              src={product.image}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8" style={{ backgroundColor: "#ECE9EC" }}>
            <div className="card-body">
              <p className="card-text h5">{product.description}</p>
              <p className="card-text">
                <small className="text-body-secondary h4">
                  {" "}
                  price: {product.price} $
                </small>
              </p>
            </div>
          </div>
          <Link
            className="card-footer"
            style={{ backgroundColor: "#FF8E42", textDecoration: "none" }}
            to="/products"
          >
            <h3>Back</h3>
          </Link>
        </div>
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default ProductDetails;
