import React from 'react';
import heroImg from '../../assets/rabbit-hero.webp';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="Rabbit Fashion Banner"
        className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"
      />

<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center">
        <div className="text-center text-white px-4 md:px-8">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight uppercase mb-4">
            Style Begins <br /> With You
          </h1>
          <p className="text-sm md:text-base lg:text-lg tracking-tight mb-6 max-w-xl mx-auto">
            Unleash your vibe with curated outfits that speak confidence. Free delivery on all orders.
          </p>
          <Link to='#' className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition-all">
            Explore Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
