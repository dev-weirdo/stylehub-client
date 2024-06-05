import React from "react";
import { Link } from "react-router-dom";

function Product(product) {
  const { _id, name, color, category, price, description, image } =
    product.data;
  return (
    <div className="card card-compact w-72 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Product;
