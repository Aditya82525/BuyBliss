import React from 'react';
import MyOrdersPage from './MyOrdersPage';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row transition-all duration-300">

        {/* Left Section */}
<div className="w-full md:w-1/3 lg:w-1/4 bg-white rounded-2xl shadow-lg p-6 border border-gray-100 transition-all duration-300 hover:shadow-xl">
  <div className="text-center">
    <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight mb-1">John Doe</h1>
    <p className="text-gray-500 text-sm mb-6">john@example.com</p>

    <button className="w-full py-2 px-4 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold text-sm shadow-sm hover:scale-[1.02] hover:shadow-md transition">
      Logout
    </button>
  </div>
</div>


        {/* Right Section */}
        <div className="w-full md:w-2/3 p-6 md:p-8">
          <MyOrdersPage />
        </div>
      </div>
    </div>
  );
};

export default Profile;
