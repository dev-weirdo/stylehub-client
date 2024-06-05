import React from 'react'
import Product from './Product';
import { useLoaderData } from 'react-router-dom';

function Products() {
  const data = useLoaderData();
  return (
    <div>
      <h1>All Products</h1>
      <div className="grid grid-cols-3 gap-3">
      {data && data.map((product) => <Product key={product._id} data={product} />)}
      </div>
    </div>
  )
}

export default Products