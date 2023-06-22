import React from "react";
import "./product.css";
import { NavLink, Button } from "react-bootstrap";
function Product({ product }) {
  return (
    <div className="col col-lg-3 col-md-6 col-sm-12 my-2 px-4 " style={{color:"#fff"}}>
      <NavLink href={`/product/${product.id}`}>
        <div
          className="card"
          style={{ backgroundColor: "#FFF", height: "400px" }}
        >
          <div
            className="card-header"
            as="h5"
            style={{ height: "50px", backgroundColor:  "#1c6266" ,color:"#fff", overflowY: "auto"  }}
          >
            <h6>{product.title}</h6>
          </div>
          <img
            src={product.image}
            style={{ minWidth:"140px",maxWidth:"150px",minHeight:"200px",maxHeight:"300px",margin:"auto" }}
            className="card-img-top p-2"
            alt="..."
          />
          <div className="card-body">
            <div className="card-title h4">Price : {product.price} $</div>
            {/* <p
              className="card-text"
              style={{ minHeight: "150px",maxHeight:"200px", overflowY: "auto" }}
            >
              {product.description}
            </p> */}
          </div>{" "}
          <Button
            className="card-footer"
            variant="none"
            style={{ backgroundColor: "#FF8E42" ,color:"#fff"}}
          >
           <h4> Details</h4>
          </Button>
        </div>
      </NavLink>
    </div>
  );
}

export default Product;
