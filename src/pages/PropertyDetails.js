import React from 'react';
import { useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import './PropertyDetails.css';

function PropertyDetails() {
  const { id } = useParams();
  
  // כאן תתבצע קריאה ל-API לקבלת פרטי הצימר לפי ה-ID
  const dummyProperty = {
    name: 'צימר בגליל',
    description: 'צימר מפנק עם נוף מדהים להרי הגליל',
    price: 500,
    rating: 4.5,
    image: 'https://example.com/image1.jpg',
    amenities: ['מיזוג אוויר', 'Wi-Fi', 'חניה חינם', 'גקוזי'],
  };

  return (
    <div className="property-details">
      <h1>{dummyProperty.name}</h1>
      <img src={dummyProperty.image} alt={dummyProperty.name} />
      <Rating value={dummyProperty.rating} />
      <p className="price">{dummyProperty.price} ללילה</p>
      <p className="description">{dummyProperty.description}</p>
      <h2>פינוקים ושירותים</h2>
      <ul className="amenities">
        {dummyProperty.amenities.map((amenity, index) => (
          <li key={index}>{amenity}</li>
        ))}
      </ul>
      <button className="book-now">הזמן עכשיו</button>
    </div>
  );
}

export default PropertyDetails;
