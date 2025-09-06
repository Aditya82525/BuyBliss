import React from 'react';
import { RiDeleteBin3Line } from 'react-icons/ri'; 

const CartContent = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-Shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 499,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 999,
      image: "https://picsum.photos/200?random=2",
    },
    {
      productId: 3,
      name: "Jacket",
      size: "L",
      color: "Green",
      quantity: 1,
      price: 1999,
      image: "https://picsum.photos/200?random=3",
    },
  ];

  return (
    <div>
      {cartProducts.map((product, index) => (
        <div key={index} className="flex items-start justify-between py-4 border-b">
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />
            <div>
              <h3 className="font-medium text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-500">
                Size: {product.size} | Color: {product.color}
              </p>
              <div className="flex items-center mt-2 gap-2">
                <button className="border px-2 py-1 rounded text-lg font-semibold">-</button>
                <span>{product.quantity}</span>
                <button className="border px-2 py-1 rounded text-lg font-semibold">+</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-between h-full">
            <p className="font-semibold text-gray-800">
              ₹{product.price.toLocaleString()}
            </p>
            <button className="text-red-600 hover:text-red-800 mt-4">
              <RiDeleteBin3Line className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContent;
