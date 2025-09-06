import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import AdminSidebar from './AdminSidebar';
import { Outlet } from 'react-router-dom';
const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* Mobile Topbar */}
      <div className="flex md:hidden items-center p-4 bg-gray-900 text-white z-30">
        <button onClick={toggleSideBar}>
          <FaBars size={24} />
        </button>
        <h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
      </div>

      {/* Backdrop for mobile */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 md:hidden z-20 ${
          isSidebarOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSideBar}
      />

      {/* Sidebar */}
      <div
        className={`bg-gray-900 w-64 min-h-screen text-white fixed top-0 left-0 z-30 transform transition-transform duration-300 md:relative md:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <AdminSidebar />
      </div>

      <div className='flex-grow p-6 overflow-auto'>
        <Outlet/>
      </div>
    </div>
  );
};

export default AdminLayout;
