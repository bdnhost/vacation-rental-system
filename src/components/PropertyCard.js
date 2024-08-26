import React from 'react';
import { Link } from 'react-router-dom';
import './PropertyCard.css';

function PropertyCard({ id, name, price, image }) {
  return (
    <div className="property-card">
      <img src={image} alt={name} />
      <div className="property-info">
        <h3>{name}</h3>
        <p className="price">₪{price} ללילה 💰</p>
        <div className="amenities">
          <span>🛏️ 2 חדרים</span>
          <span>🚿 מקלחת</span>
          <span>🅿️ חניה</span>
        </div>
        <Link to={/property/} className="details-button">לפרטים נוספים 👀</Link>
      </div>
    </div>
  );
}

export default PropertyCard;
