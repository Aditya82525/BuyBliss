import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from "sonner";
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import registerImage from '../assets/register.webp';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

const handleSubmit = (e) => {
  e.preventDefault();
  toast.success("Registered successfully!");
  console.log("User Registered:", { name, email, password });
};

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left - Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-12">
        <div className="w-full max-w-md">
          {/* Logo/Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Create your <span className="text-indigo-600">BuyBliss</span> account
            </h1>
            <p className="text-gray-500 mt-2">Join us and start your journey!</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-8 space-y-6 transition-all duration-500">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <div className="relative">
                <FiUser className="absolute left-3 top-3.5 text-gray-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <div className="relative">
                <FiMail className="absolute left-3 top-3.5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <FiLock className="absolute left-3 top-3.5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Sign Up
            </button>

            {/* Login Link */}
            <p className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-indigo-600 hover:underline font-medium">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Right - Illustration */}
      <div className="hidden md:flex items-center justify-center w-1/2 bg-indigo-50">
        <img
          src={registerImage}
          alt="Register Illustration"
          className="w-4/5 max-w-[500px] object-contain"
        />
      </div>
    </div>
  );
};

export default Register;
