import React from "react";

function Faq() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Frequently Asked Questions
      </h1>
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-700 mb-2">
          1. Do you offer free shipping?
        </h2>
        <p className="text-gray-600">
          Yes, we provide free shipping on all orders over $50. Shop more and
          save on shipping costs!
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-700 mb-2">
          2. What is your return policy?
        </h2>
        <p className="text-gray-600">
          We offer a 30-day return policy for unworn items with tags attached.
          Check our returns page for more details.
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-700 mb-2">
          3. How can I track my order?
        </h2>
        <p className="text-gray-600">
          Once your order is shipped, you will receive a tracking number via
          email to monitor your package's delivery status.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-bold text-gray-700 mb-2">
          4. Do you offer international shipping?
        </h2>
        <p className="text-gray-600">
          Yes, we ship internationally to select countries. Contact our customer
          support for more information on international shipping options.
        </p>
      </div>
    </div>
  );
}

export default Faq;
