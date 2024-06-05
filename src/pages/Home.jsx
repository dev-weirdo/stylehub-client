import React from "react";
import Hero from "../components/Hero";

function Home() {
  // Dummy data for each section
  const latestArrivals = [
    { id: 1, name: "Floral Midi Dress", price: "$49.99" },
    { id: 2, name: "Ripped Skinny Jeans", price: "$39.99" },
    { id: 3, name: "Strappy Sandals", price: "$29.99" },
  ];

  const trendingProducts = [
    { id: 1, name: "Off-Shoulder Top", price: "$34.99" },
    { id: 2, name: "Denim Jacket", price: "$59.99" },
    { id: 3, name: "Sneakers", price: "$44.99" },
  ];

  const fashionTips = [
    "Mix and match patterns for a bold look.",
    "Accessorize to elevate your outfit.",
    "Invest in staple pieces like a classic blazer.",
  ];

  const shopTheLookItems = [
    { id: 1, name: "Boho Chic Ensemble", price: "$89.99" },
    { id: 2, name: "Casual Weekend Vibes Set", price: "$69.99" },
  ];

  const customerReviews = [
    {
      id: 1,
      name: "Sarah",
      comment:
        "Absolutely love the quality of the clothes! Will shop here again.",
    },
    {
      id: 2,
      name: "Mike",
      comment: "Fast shipping and great customer service. Highly recommend!",
    },
  ];

  return (
    <div className="bg-gray-100">
      <section className="p-8 sm:p-12 md:p-16 lg:p-20 bg-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
          Welcome to StyleHub
        </h1>
        <p className="text-center text-lg">
          Your one-stop destination for all things fashion!
        </p>
      </section>

      <section className="p-8 sm:p-12 md:p-16 lg:p-20 bg-gray-200">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
          Latest Arrivals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {latestArrivals.map((item) => (
            <div key={item.id} className="bg-white p-4 shadow-md">
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-sm">{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="p-8 sm:p-12 md:p-16 lg:p-20 bg-white">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
          Trending Now
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {trendingProducts.map((item) => (
            <div key={item.id} className="bg-gray-100 p-4 shadow-md">
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-sm">{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="p-8 sm:p-12 md:p-16 lg:p-20 bg-gray-200">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
          Fashion Tips & Tricks
        </h2>
        <ul className="list-disc list-inside text-lg">
          {fashionTips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </section>

      <section className="p-8 sm:p-12 md:p-16 lg:p-20 bg-white">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
          Shop the Look
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {shopTheLookItems.map((item) => (
            <div key={item.id} className="bg-gray-100 p-4 shadow-md">
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-sm">{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="p-8 sm:p-12 md:p-16 lg:p-20 bg-gray-200">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
          Customer Reviews
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {customerReviews.map((review) => (
            <div key={review.id} className="bg-white p-4 shadow-md">
              <h3 className="text-lg font-bold">{review.name}</h3>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
