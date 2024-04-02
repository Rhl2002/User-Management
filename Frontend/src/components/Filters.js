import React, { useState } from 'react';

const Filters = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    domain: '',
    gender: 'All',
    availability: 'All'
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const applyFilters = () => {
    const filteredValues = {
      ...filters,
      gender: filters.gender === 'All' ? '' : filters.gender,
      availability: filters.availability === 'All' ? '' : filters.availability
    };
    onFilter(filteredValues);
  };

  return (
    <div className="filters mt-4">
      <h2 className="text-xl font-bold mb-2">Filters</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <label className="flex flex-col">
          <span className="text-gray-700">Domain:</span>
          <input type="text" name="domain" onChange={handleFilterChange} className="border border-gray-300 rounded px-2 py-1 mt-1" />
        </label>
        <label className="flex flex-col">
          <span className="text-gray-700">Gender:</span>
          <select name="gender" value={filters.gender} onChange={handleFilterChange} className="border border-gray-300 rounded px-2 py-1 mt-1">
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </label>
        <label className="flex flex-col">
          <span className="text-gray-700">Availability:</span>
          <select name="availability" value={filters.availability} onChange={handleFilterChange} className="border border-gray-300 rounded px-2 py-1 mt-1">
            <option value="All">All</option>
            <option value="true">Available</option>
            <option value="false">Not Available</option>
          </select>
        </label>
      </div>
      <button onClick={applyFilters} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Apply Filters</button>
    </div>
  );
};

export default Filters;
