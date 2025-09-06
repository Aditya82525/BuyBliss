import React, { useRef, useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const NewArrival = () => {
  const scrollRef = useRef(null);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const newArrivals = Array.from({ length: 8 }, (_, i) => ({
    _id: `${i + 1}`,
    name: `Stylish Jacket ${i + 1}`,
    price: `${100 + i * 10}`,
    image: [
      {
        url: `https://picsum.photos/seed/newarrival${i}/500/500`,
        alt: `Stylish Jacket ${i + 1}`,
      },
    ],
  }));

  const scroll = (direction) => {
    const scrollAmount = direction === 'left' ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const updateScrollButton = () => {
    const container = scrollRef.current;
    if (!container) return;
    const leftScroll = container.scrollLeft;
    const rightScrollable = container.scrollWidth > container.clientWidth + leftScroll;
    setCanScrollLeft(leftScroll > 0);
    setCanScrollRight(rightScrollable);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', updateScrollButton);
      updateScrollButton();
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', updateScrollButton);
      }
    };
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    scrollRef.current.style.scrollBehavior = 'auto';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    scrollRef.current.scrollLeft -= walk;
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
    scrollRef.current.style.scrollBehavior = 'smooth';
  };

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
      <div className="text-center mb-10 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Explore New Arrivals
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto">
          Fresh drops just landed. Vibe up your fit with the newest arrivals made to turn heads.
        </p>
        <div className="absolute right-0 bottom-[-30px] hidden md:flex space-x-2">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`rounded border p-2 ${
              canScrollLeft
                ? 'bg-white text-black hover:bg-gray-100'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`rounded border p-2 ${
              canScrollRight
                ? 'bg-white text-black hover:bg-gray-100'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
       className="flex gap-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
      >
{newArrivals.map((product) => (
  <Link
    key={product._id}
    to={`/product/${product._id}`}
    className="min-w-[250px] sm:min-w-[300px] lg:min-w-[320px] relative group overflow-hidden rounded-lg shadow-md transition hover:shadow-xl"
  >
    <img
      src={product.image[0]?.url}
      alt={product.image[0]?.alt || product.name}
      className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300 flex flex-col justify-end p-4">
      <div className="text-white">
        <h4 className="text-lg font-semibold">{product.name}</h4>
        <p className="text-sm text-gray-200">${product.price}</p>
      </div>
    </div>
  </Link>
))}

      </div>
    </section>
  );
};

export default NewArrival;
