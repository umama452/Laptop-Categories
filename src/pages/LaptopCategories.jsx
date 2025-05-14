// import React from 'react';

// const LaptopCategories = () => {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">Laptop Categories</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="p-4 border rounded shadow hover:shadow-lg transition">
//           <h2 className="text-xl font-semibold">Business Laptops</h2>
//           <p className="text-gray-500">Efficient and professional laptops for work and productivity.</p>
//         </div>
//         <div className="p-4 border rounded shadow hover:shadow-lg transition">
//           <h2 className="text-xl font-semibold">Gaming Laptops</h2>
//           <p className="text-gray-500">High-performance machines built for gaming and heavy tasks.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LaptopCategories;


import React from 'react';
import { Link } from 'react-router-dom';

const LaptopCategories = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Laptop Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/categories/business" className="p-4 border rounded shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">Business Laptops</h2>
          <p className="text-gray-500">Efficient laptops for work and productivity.</p>
        </Link>
        <Link to="/categories/gaming" className="p-4 border rounded shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">Gaming Laptops</h2>
          <p className="text-gray-500">High-performance laptops built for gaming.</p>
        </Link>
      </div>
    </div>
  );
};

export default LaptopCategories;
