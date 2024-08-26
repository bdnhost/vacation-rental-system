import React from 'react';
import AdvancedSearch from '../components/AdvancedSearch';
import PropertyCard from '../components/PropertyCard';
import './Search.css';

function Search() {
  const handleSearch = (searchParams) => {
    console.log('חיפוש עם הפרמטרים:', searchParams);
    // כאן תתבצע קריאה ל-API עם פרמטרי החיפוש
  };

  const dummyResults = [
    { id: 1, name: 'צימר בגליל', price: 500, image: 'https://example.com/image1.jpg' },
    { id: 2, name: 'בקתה בכרמל', price: 600, image: 'https://example.com/image2.jpg' },
    { id: 3, name: 'דירת נופש בתל אביב', price: 800, image: 'https://example.com/image3.jpg' },
  ];

  return (
    <div className="search-page">
      <h1>חיפוש צימרים</h1>
      <AdvancedSearch onSearch={handleSearch} />
      <div className="search-results">
        {dummyResults.map(property => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
}

export default Search;
