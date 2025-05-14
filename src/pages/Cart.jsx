import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return <div className="p-6 text-gray-600">Your cart is empty.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center border-b py-4">
          <div className="flex gap-4 items-center">
            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-gray-500">${item.price}</p>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                className="mt-2 w-16 border rounded px-2"
                min="1"
              />
            </div>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-600 hover:underline"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="text-right font-bold text-xl mt-6">
        Total: ${total.toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;
