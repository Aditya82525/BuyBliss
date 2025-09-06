import React from 'react';
import { useSearchParams } from 'react-router-dom';

const SortOption = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortChange = (e) => {
    const sortby = e.target.value;
    searchParams.set("sortby", sortby);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex justify-end mb-6">
      <select
        id="sort"
        onChange={handleSortChange}
        value={searchParams.get("sortby") || ""}
        className="border border-gray-300 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
      >
        <option value="">Default</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  );
};

export default SortOption;
