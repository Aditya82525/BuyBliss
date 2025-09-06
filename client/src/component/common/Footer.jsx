import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='border-t bg-white'>
      {/* Main Footer Content */}
      <div className='max-w-screen-xl mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-2 lg:grid-cols-4'>
        {/* Newsletter */}
        <div>
          <h3 className='text-lg text-gray-800 mb-4'>Newsletter</h3>
          <p className='text-gray-500 mb-4'>
            Be the first to hear about new products, exclusive events, and online offers.
          </p>
          <p className='font-medium text-sm mb-6 text-gray-600'>
            Sign up and get 10% off on your first order.
          </p>
          <form className='flex'>
            <input
              type='email'
              placeholder='Enter your email'
              className='p-3 w-full border-t border-b border-l text-sm border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all'
              required
            />
            <button
              type='submit'
              className='bg-black text-white text-sm px-6 py-3 rounded-r-md hover:bg-gray-800 transition-all'
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link to="#">Men's Topwear</Link></li>
            <li><Link to="#">Women's Topwear</Link></li>
            <li><Link to="#">Men's Bottomwear</Link></li>
            <li><Link to="#">Women's Bottomwear</Link></li>
            <li><Link to="#">Accessories</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link to="#">Contact Us</Link></li>
            <li><Link to="#">About Us</Link></li>
            <li><Link to="#">FAQs</Link></li>
            <li><Link to="#">Features</Link></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
          <p className="text-gray-500 mb-4">Let’s connect on social platforms</p>
          <div className="flex gap-4 text-gray-600 text-xl">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t text-center py-6 text-sm text-gray-500 bg-gray-50'>
        © 2025 BuyBliss. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
