import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <h1><Link to="/">מערכת הזמנת צימרים</Link></h1>
        <nav>
          <ul>
            <li><Link to="/">דף הבית</Link></li>
            <li><Link to="/search">חיפוש</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
