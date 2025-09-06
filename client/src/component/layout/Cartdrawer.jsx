// client/src/component/layout/Cartdrawer.jsx
import React from "react";
import { IoMdClose } from "react-icons/io";
import CartContent from "../cart/CartContent";
import { useNavigate } from "react-router-dom";

const Cartdrawer = ({ isOpen, toggleCartDrawer }) => {
  const navigate= useNavigate();
  const handleCheckOut=()=>{
      toggleCartDrawer();
      navigate("/checkout");
  }
  return (
    <div
      className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 md:w-[30rem] bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <h2 className="text-lg font-semibold text-gray-800">Your Cart</h2>
        <button onClick={toggleCartDrawer} className="text-gray-600 hover:text-black">
          <IoMdClose className="w-6 h-6" />
        </button>
      </div>

      {/* Cart content */}
      <div className="p-4 text-gray-700">
        <CartContent />
      </div>

      {/* Footer */}
      <div className="sticky bottom-0 p-4 bg-white border-t">
        <button onClick={handleCheckOut} className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
          Shipping, taxes, and discount codes calculated at checkout.
        </p>
      </div>
    </div>
  );
};

export default Cartdrawer;
