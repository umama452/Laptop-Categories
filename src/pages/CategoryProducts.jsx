// import React from 'react';
// import { useParams } from 'react-router-dom';
// import laptops from '../data/laptops';

// const CategoryProducts = () => {
//   const { category} = useParams();
//     // const { id } = useParams();
//   //   const product = laptops.find((p) => p.id === parseInt(id));
//   // const { addToCart } = useCart();
//   // Simple filter logic
//   const filteredLaptops = laptops.filter((laptop) =>
//     category === 'gaming'
//       ? laptop.category === 'gaming'
//       : laptop.category === 'business'
//   );

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4 capitalize">{category} Laptops</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {filteredLaptops.map((laptop) => (
//           <div key={laptop.id} className="border p-4 rounded shadow">
//             <img src={laptop.image} alt={laptop.name} className="w-full h-48 object-cover rounded" />
//             <h2 className="text-xl font-semibold mt-2">{laptop.name}</h2>
//             <p className="text-gray-600">{laptop.specs}</p>
//             <p className="text-green-600 font-bold mt-1">${laptop.price}</p>
//              {/* <button 
//           onClick={() => addToCart(product)} 
//           className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//         >
//           Add to Cart
//         </button> */}
//           </div>
//         ))} 
//       </div>
//     </div>
//   );
// };

// export default CategoryProducts;


import React from 'react';
import { useParams } from 'react-router-dom';
import laptops from '../data/laptops';
import { useCart } from '../context/CartContext';

const CategoryProducts = () => {
  const { category } = useParams();
  const { addToCart } = useCart(); // ✅ Get addToCart from context

  const filteredLaptops = laptops.filter((laptop) =>
    laptop.category === category
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 capitalize">{category} Laptops</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredLaptops.map((laptop) => (
          <div key={laptop.id} className="border p-4 rounded shadow">
            <img src={laptop.image} alt={laptop.name} className="w-full h-48 object-cover rounded" />
            <h2 className="text-xl font-semibold mt-2">{laptop.name}</h2>
            <p className="text-gray-600">{laptop.specs}</p>
            <p className="text-green-600 font-bold mt-1">${laptop.price}</p>

            <button
              // onClick={() => addToCart(laptop)} // ✅ Add to cart on click
              onClick={() => {
           addToCart(laptop);
            alert(`${laptop.name} added to cart`);
            }}

              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
