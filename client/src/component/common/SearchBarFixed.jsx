import React, { useState } from 'react';
import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      console.log("searchTerm", searchTerm);
      setSearchTerm('');
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      {isOpen ? (
        <form onSubmit={handleSubmit} className="flex items-center bg-white rounded-md px-2">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-2 py-1 text-black placeholder-gray-500 focus:outline-none w-40 sm:w-60"
            placeholder="Search"
            autoFocus
          />
          <button type="submit">
            <HiMagnifyingGlass className="w-5 h-5 text-black mx-1" />
          </button>
          <button type="button" onClick={handleToggle}>
            <HiMiniXMark className="w-5 h-5 text-black mx-1" />
          </button>
        </form>
      ) : (
        <button onClick={handleToggle}>
          <HiMagnifyingGlass className="h-6 w-6 text-white" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
