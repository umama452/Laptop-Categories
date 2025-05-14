import React from 'react';
import { Link } from 'react-router-dom';

const LaptopCard = ({ laptop }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg">
      <img src={laptop.image} alt={laptop.name} className="w-full h-48 object-cover rounded" />
      <h2 className="text-xl font-semibold mt-2">{laptop.name}</h2>
      <p className="text-gray-600">{laptop.specs}</p>
      <p className="text-green-600 font-bold mt-1">${laptop.price}</p>
      <Link to={`/products/${laptop.id}`}>
        <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default LaptopCard;
