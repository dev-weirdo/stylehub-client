import React from "react";

function AddProduct() {
  return (
    <div className="w-2/4 space-y-2">
      <label className="input input-bordered flex items-center gap-2">
        Name
        <input type="text" className="grow" placeholder="Black pant" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        Color
        <input type="text" className="grow" placeholder="White" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        Price
        <input type="number" className="grow" placeholder="Price" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        Description
        <input type="text" className="grow" placeholder="Description" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        Image
        <input type="text" className="grow" placeholder="Image link" />
      </label>
      <div className="flex items-center justify-center">
        <button className="btn btn-wide bg-red-500 text-white hover:bg-red-600">
          Add product
        </button>
      </div>
    </div>
  );
}

export default AddProduct;
