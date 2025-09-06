import React, { useState } from "react";
import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io"; // ✅ Fix: missing import
import { Link } from "react-router-dom";
import SearchBar from "./SearchBarFixed";
import Cartdrawer from "../layout/Cartdrawer";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleCartDrawer = () => setDrawerOpen((prev) => !prev);

  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const toggleNavDrawer = () => setNavDrawerOpen((prev) => !prev);
const navItems = [
  { label: "Men",        to: "/collections/all" },
  { label: "Women",      to: "/collections/women" },
  { label: "Topwear",    to: "/collections/topwear" },
  { label: "Bottomwear", to: "/collections/bottomwear" },
];

  return (
    <>
      <nav className="bg-[#111111] border-b border-gray-800 text-white relative z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          <Link to="/" className="text-2xl font-semibold tracking-tight text-white">
            BuyBliss
          </Link>

          
          <div className="hidden md:flex space-x-8">
<nav className="flex space-x-6">
    {navItems.map(({ label, to }) => (
      <Link
        key={label}
        to={to}
        className="text-gray-300 hover:text-white text-sm font-medium uppercase transition duration-150"
      >
        {label}
      </Link>
    ))}
  </nav>
          </div>

          <div className="flex items-center space-x-4">
<Link
  to="/admin"
  className="px-3 py-1 rounded-md text-sm font-medium bg-white text-black border border-gray-500 "
>
  Admin
</Link>

            <Link to="/profile" className="text-gray-300 hover:text-white transition">
              <HiOutlineUser className="w-5 h-5" />
            </Link>

            <button onClick={toggleCartDrawer} className="relative text-gray-300 hover:text-white transition">
              <HiOutlineShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                4
              </span>
            </button>

            <SearchBar />
            <button onClick={toggleNavDrawer} className="md:hidden text-white">
              <HiBars3BottomRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Cart Drawer */}
      <Cartdrawer isOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* Mobile Nav Drawer */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white transform transition-transform duration-300 shadow-lg z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="px-6">
            <h2 className="font-semibold text-xl  mb-4">Menu</h2>
          {/* You can add mobile nav links here */}
          <ul className="space-y-4 text-gray-800 font-medium text-lg">
            {["Men", "Women", "Topwear", "Bottomwear"].map((label, i) => (
              <li key={i}>
                <Link to="#" onClick={toggleNavDrawer}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
