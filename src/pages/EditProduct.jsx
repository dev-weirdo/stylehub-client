import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function EditProduct() {
  const data = useLoaderData();
  const [name, setName] = useState(data.name);
  const [color, setColor] = useState(data.color);
  const [description, setDescription] = useState(data.description);
  const [price, setPrice] = useState(data.price);
  const [image, setImage] = useState(data.image);

  const handleProductUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const color = form.color.value;
    const price = form.price.value;
    const description = form.description.value;
    const image = form.image.value;

    const updatedData = { name, color, price, description, image };
    await fetch(`https://stylehub-server.onrender.com/products/${data._id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <div className="w-full flex items-center">
      <form onSubmit={handleProductUpdate} className="w-2/4 space-y-2">
        <label className="input input-bordered flex items-center gap-2">
          Name:
          <input
            type="text"
            name="name"
            className="grow"
            placeholder="Black pant"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Color:
          <input
            type="text"
            name="color"
            className="grow"
            placeholder="White"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Price:
          <input
            type="number"
            name="price"
            className="grow"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Description:
          <input
            type="text"
            name="description"
            className="grow"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Image:
          <input
            type="text"
            name="image"
            className="grow"
            placeholder="Image link"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="btn btn-wide bg-red-500 text-white hover:bg-red-600"
          >
            Add product
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProduct;
