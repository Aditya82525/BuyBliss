import React from 'react';
import mensCollectionImage from '../../assets/mens-collection.webp';
import womensCollectionImage from '../../assets/womens-collection.webp';
import { Link } from 'react-router-dom';

const GenderCollectionSection = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Women's Collection */}
        <div className="relative group overflow-hidden rounded-lg shadow-md">
          <img
            src={womensCollectionImage}
            alt="Women's Collection"
            className="w-full h-[400px] object-cover transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold uppercase">
              <Link to="/collections/all?gender=Women">Women's Collection</Link>
            </h2>
          </div>
        </div>

        {/* Men's Collection */}
        <div className="relative group overflow-hidden rounded-lg shadow-md">
          <img
            src={mensCollectionImage}
            alt="Men's Collection"
            className="w-full h-[400px] object-cover transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold uppercase">
              <Link to="/collections/all?gender=Men">Men's Collection</Link>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
