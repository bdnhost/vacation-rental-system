import React from 'react';
import PropertyCard from '../components/PropertyCard';
import './Home.css';

function Home() {
  const featuredProperties = [
    { id: 1, name: 'צימר בגליל 🏡', price: 500, image: 'https://example.com/image1.jpg' },
    { id: 2, name: 'בקתה בכרמל 🌳', price: 600, image: 'https://example.com/image2.jpg' },
    { id: 3, name: 'דירת נופש בתל אביב 🏙️', price: 800, image: 'https://example.com/image3.jpg' },
  ];

  return (
    <div className="home">
      <div className="hero">
        <h1>ברוכים הבאים לחופשה המושלמת! 🌟</h1>
        <p>גלו את הצימרים המדהימים ביותר בישראל</p>
      </div>
      <div className="container">
        <h2>צימרים מומלצים 🏆</h2>
        <div className="property-list">
          {featuredProperties.map(property => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
        <div className="cta-section">
          <h2>מוכנים לחופשה בלתי נשכחת? 🏖️</h2>
          <p>הזמינו עכשיו וקבלו 10% הנחה על ההזמנה הראשונה!</p>
          <button>חפשו צימר עכשיו 🔍</button>
        </div>
      </div>
      <div className="features-section">
        <div className="feature">
          <span className="emoji">🌟</span>
          <h3>בחירה מובטחת</h3>
          <p>צימרים ברמה הגבוהה ביותר</p>
        </div>
        <div className="feature">
          <span className="emoji">💰</span>
          <h3>מחירים הוגנים</h3>
          <p>תמורה מעולה לכספכם</p>
        </div>
        <div className="feature">
          <span className="emoji">🛡️</span>
          <h3>הזמנה מאובטחת</h3>
          <p>תשלום בטוח ומאובטח</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
