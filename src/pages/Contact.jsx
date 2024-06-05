import React from 'react'

function Contact() {
  return (
    <div className="bg-gray-100 p-8 sm:p-12 md:p-16 lg:p-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">Contact Us</h1>
            <p className="text-lg text-center mb-6">For any inquiries or assistance, feel free to reach out to us:</p>
            <div className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg mb-8">
                <p className="text-gray-700">Email: info@stylehub.com</p>
                <p className="text-gray-700">Phone: 123-456-7890</p>
                <p className="text-gray-700">Address: 123 Fashion Ave, City, Country</p>
            </div>
            <div className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
                <form className="flex flex-col space-y-4">
                    <input type="text" placeholder="Your Name" className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400" />
                    <input type="email" placeholder="Your Email" className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400" />
                    <textarea placeholder="Your Message" rows="4" className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400"></textarea>
                    <button type="submit" className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">Send</button>
                </form>
            </div>
        </div>
  )
}

export default Contact