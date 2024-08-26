import React from 'react';
import './Rating.css';

function Rating({ value }) {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={star <= value ? 'star filled' : 'star'}>
          ★
        </span>
      ))}
    </div>
  );
}

export default Rating;
