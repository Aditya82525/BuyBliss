import React from "react";
import { Link } from "react-router-dom";

const ProductGrid = ({ products }) => {
  if (!products || !Array.isArray(products)) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <Link key={index} to={`/product/${product._id}`} className="block group">
          <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-pink-200 transition-shadow duration-300">
            <div className="w-full h-80 sm:h-96 mb-4 overflow-hidden rounded-lg">
              <img
                src={product.images?.[0]?.url || "https://via.placeholder.com/500"}
                alt={product.images?.[0]?.altText || product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
            <p className="text-pink-600 font-bold mt-1">${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
