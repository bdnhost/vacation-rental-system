import React, { useState } from 'react';
import './AdvancedSearch.css';

function AdvancedSearch({ onSearch }) {
  const [searchParams, setSearchParams] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    minPrice: '',
    maxPrice: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  return (
    <form className="advanced-search" onSubmit={handleSubmit}>
      <input
        type="text"
        name="location"
        value={searchParams.location}
        onChange={handleChange}
        placeholder="איפה תרצו להתארח?"
      />
      <input
        type="date"
        name="checkIn"
        value={searchParams.checkIn}
        onChange={handleChange}
        placeholder="תאריך הגעה"
      />
      <input
        type="date"
        name="checkOut"
        value={searchParams.checkOut}
        onChange={handleChange}
        placeholder="תאריך עזיבה"
      />
      <input
        type="number"
        name="guests"
        value={searchParams.guests}
        onChange={handleChange}
        min="1"
        placeholder="מספר אורחים"
      />
      <input
        type="number"
        name="minPrice"
        value={searchParams.minPrice}
        onChange={handleChange}
        placeholder="מחיר מינימלי"
      />
      <input
        type="number"
        name="maxPrice"
        value={searchParams.maxPrice}
        onChange={handleChange}
        placeholder="מחיר מקסימלי"
      />
      <button type="submit">חיפוש</button>
    </form>
  );
}

export default AdvancedSearch;
