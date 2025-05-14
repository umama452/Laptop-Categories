import React from 'react';
import { useParams } from 'react-router-dom';
import laptops from '../data/laptops';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = laptops.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) return <div className="p-6 text-red-500">Product not found.</div>;

  return (
    <div className="p-6 md:flex gap-6">
      <img src={product.image} alt={product.name} className="w-full md:w-1/2 h-auto object-cover rounded-lg" />
      <div className="mt-4 md:mt-0 md:w-1/2">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-600 mt-2">{product.specs}</p>
        <p className="text-xl text-green-600 font-bold mt-4">${product.price}</p>
        <p className="text-yellow-500 mt-2">Rating: {product.rating} ⭐</p>
        <button 
          onClick={() => addToCart(product)} 
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
