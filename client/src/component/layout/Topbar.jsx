import React from 'react'
import { TbBrandMeta } from 'react-icons/tb'
import { RiInstagramLine, RiTwitterXLine } from 'react-icons/ri'

const Topbar = () => {
  return (
    <div className="bg-[#1a1a1a] text-gray-300 text-sm">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-white transition">
            <TbBrandMeta className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-white transition">
            <RiInstagramLine className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-white transition">
            <RiTwitterXLine className="w-4 h-4" />
          </a>
        </div>
        <div className="text-xs md:text-sm text-center flex-grow">
          <span>Worldwide shipping — Fast & Secure</span>
        </div>
        <div className="hidden md:block">
          <a href="tel:+1234567890" className="hover:text-white transition">
            +1 (234) 567 890
          </a>
        </div>
      </div>
    </div>
  )
}

export default Topbar



