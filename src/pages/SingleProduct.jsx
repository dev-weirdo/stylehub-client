import React from "react";
import { Link } from "react-router-dom";

function SingleProduct(product) {
  const { _id, name, color, category, price, description, image } =
    product.data;
  const handleProductDelete = async () => {
    await fetch(`https://stylehub-server.onrender.com/products/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <div className="card card-compact w-72 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={`edit/${_id}`}>
            <button className="btn btn-primary">Edit</button>
          </Link>
          <button onClick={handleProductDelete} className="btn btn-primary">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
