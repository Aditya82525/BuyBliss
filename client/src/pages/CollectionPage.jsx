import React, { useEffect, useRef, useState } from "react";
import FilterSidebar from "../component/product/FilterSidebar";
import { FaFilter } from "react-icons/fa";
import ProductDetail from "../component/product/ProductDetail";
import ProductGrid from "../component/product/ProductGrid";
import SortOption from "../component/product/SortOption";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        { _id: 1, name: "Product 1", price: 100, images: [{ url: "https://picsum.photos/500/500?random=2" }] },
        { _id: 2, name: "Product 2", price: 100, images: [{ url: "https://picsum.photos/500/500?random=3" }] },
        { _id: 3, name: "Product 3", price: 100, images: [{ url: "https://picsum.photos/500/500?random=4" }] },
        { _id: 4, name: "Product 4", price: 100, images: [{ url: "https://picsum.photos/500/500?random=5" }] },
        { _id: 5, name: "Product 5", price: 100, images: [{ url: "https://picsum.photos/500/500?random=6" }] },
        { _id: 6, name: "Product 6", price: 100, images: [{ url: "https://picsum.photos/500/500?random=7" }] },
        { _id: 7, name: "Product 7", price: 100, images: [{ url: "https://picsum.photos/500/500?random=8" }] },
        { _id: 8, name: "Product 8", price: 100, images: [{ url: "https://picsum.photos/500/500?random=9" }] },
      ];
      setProducts(fetchedProducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row bg-[#f9fafb] min-h-screen">
      {/* Mobile filter button */}
      <button 
        onClick={toggleSideBar} 
        className="lg:hidden border p-2 m-2 rounded-md bg-white shadow-sm flex items-center"
      >
        <FaFilter className="mr-2" /> Filter
      </button>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:static lg:translate-x-0 lg:shadow-none`}
      >
        <FilterSidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">All Collection</h2>
        <SortOption />
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default CollectionPage;
