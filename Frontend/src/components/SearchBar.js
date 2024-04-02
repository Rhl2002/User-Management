import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar flex items-center border border-gray-300 rounded px-4 py-2">
      <input type="text" placeholder="Search by name..." value={query} onChange={handleInputChange} className="flex-grow outline-none" />
      <button onClick={handleSearch} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Search</button>
    </div>
  );
};

export default SearchBar;
