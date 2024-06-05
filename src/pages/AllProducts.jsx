import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleProduct from "./SingleProduct";

function AllProducts() {
  const data = useLoaderData();
  return (
    <div>
      <h1>All Products</h1>
      <div className="grid grid-cols-3 gap-3">
      {data && data.map((product) => <SingleProduct key={product._id} data={product} />)}
      </div>
    </div>
  );
}

export default AllProducts;
