// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div className="p-6">
//       <h1 className="text-4xl font-bold mb-4">Welcome to Laptop Shop</h1>
//       <p className="text-lg text-gray-700 mb-6">
//         Discover the best laptops for gaming, business, and everyday use. Browse by category and compare top-rated models.
//       </p>
//       <Link to="/categories">
//       <button className="bg-blue-600 text-white px-4 py-2 rounded">
//         Browse Categories
//       </button>
//     </Link>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-6 space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Laptop Shop</h1>
        <p className="text-lg text-gray-700 mb-6">
          Discover the best laptops for gaming, business, and everyday use.
          Browse by category and compare top-rated models.
        </p>
        <Link to="/categories">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Browse Categories
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Why Shop With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Top Brands</h3>
            <p className="text-gray-600">We feature the latest models from Dell, HP, Apple, ASUS, and more.</p>
          </div>
          <div className="p-4 border rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Affordable Prices</h3>
            <p className="text-gray-600">Great deals and competitive pricing on all categories.</p>
          </div>
          <div className="p-4 border rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
            <p className="text-gray-600">Get your laptop delivered quickly and safely to your doorstep.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border-l-4 border-blue-500 bg-gray-50">
            <p>"Great service and fast delivery! Got my laptop in 2 days."</p>
            <span className="block text-sm mt-2 text-gray-500">— Sarah M.</span>
          </div>
          <div className="p-4 border-l-4 border-green-500 bg-gray-50">
            <p>"Excellent selection of gaming laptops. Super happy with my purchase!"</p>
            <span className="block text-sm mt-2 text-gray-500">— Alex D.</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
