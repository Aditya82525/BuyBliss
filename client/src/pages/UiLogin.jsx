import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';
import loginImage from '../assets/login.webp';
import { toast } from 'sonner';

const UiLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Logged in successfully!");
    console.log("User Logged In:", { email, password });
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left - Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-12">
        <div className="w-full max-w-md">
          {/* Logo/Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Welcome to <span className="text-indigo-600">BuyBliss</span>
            </h1>
            <p className="text-gray-500 mt-2">Sign in to access your dashboard</p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-xl p-8 space-y-6 animate-fade-in"
          >
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
              Sign In
            </button>

            {/* Register Link */}
            <p className="text-center text-sm text-gray-600">
              Don’t have an account?{' '}
              <Link to="/register" className="text-indigo-600 hover:underline font-medium">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Right - Illustration */}
      <div className="hidden md:flex items-center justify-center w-1/2 bg-indigo-50">
        <img
          src={loginImage}
          alt="Login Visual"
          className="w-4/5 max-w-[500px] object-contain animate-fade-in"
        />
      </div>
    </div>
  );
};

export default UiLogin;
