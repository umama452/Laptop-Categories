import React, { useState } from 'react';
import laptopsData from '../data/laptops';
import LaptopCard from '../components/LaptopCard';

const ProductListing = () => {
  const [sortType, setSortType] = useState('');
  const [laptops, setLaptops] = useState(laptopsData);

  const handleSort = (type) => {
    setSortType(type);
    const sorted = [...laptops].sort((a, b) => {
      if (type === 'price-asc') return a.price - b.price;
      if (type === 'price-desc') return b.price - a.price;
      if (type === 'rating') return b.rating - a.rating;
      return 0;
    });
    setLaptops(sorted);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Laptops</h1>

      <div className="mb-4">
        <label className="mr-2 font-semibold">Sort by:</label>
        <select 
          value={sortType}
          onChange={(e) => handleSort(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Select</option>
          <option value="price-asc">Price (Low → High)</option>
          <option value="price-desc">Price (High → Low)</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {laptops.map((laptop) => (
          <LaptopCard key={laptop.id} laptop={laptop} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
