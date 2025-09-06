import React from 'react';
import Hero from '../component/layout/Hero';
import GenderCollectionSection from '../component/product/GenderCollectionSection';
import NewArrival from '../component/product/NewArrival';
import ProductDetail from '../component/product/ProductDetail';
import ProductGrid from '../component/product/ProductGrid';
import FeaturedCollection from '../component/product/FeaturedCollection';
import FeaturedSection from '../component/product/FeaturedSection';
const placeholderProducts=[
      {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=2" }],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=3" }],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=4" }],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=5" }],
  },
    {
    _id: 5,
    name: "Product 5",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=5" }],
  },
  {
    _id: 6,
    name: "Product 6",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=6" }],
  },
  {
    _id: 7,
    name: "Product 7",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=7" }],
  },
  {
    _id: 8,
    name: "Product 8",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=8" }],
  },
]
const Homes = () => {
  return (
    <div className="bg-white">
      <Hero />
      <GenderCollectionSection />
      <NewArrival />
      <section className="py-12 px-4 md:px-8 lg:px-16 text-center">
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Best Sellers</h2>
    <p className="text-gray-600 mb-8 text-sm md:text-base">
      Handpicked favorites loved by our fashion-forward community.
    </p>
        <ProductDetail />
      </section>
      <div className='container mx-auto mb-10'>
        <h2 className='text-center text-2xl font-bold mb-4'>Top Wears For Women</h2>
        <ProductGrid products={placeholderProducts}/>
      </div>
      <FeaturedCollection />
      <FeaturedSection />
    </div>
  );
};

export default Homes;
