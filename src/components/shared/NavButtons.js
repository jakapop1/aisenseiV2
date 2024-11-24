// src/components/shared/NavButtons.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavButtons = ({ previous, next }) => {
  return (
    <div className="nav-buttons">
      {previous && (
        <Link 
          to={previous.link} 
          className="nav-link"
        >
          ← {previous.text}
        </Link>
      )}
      {next && (
        <Link 
          to={next.link} 
          className="nav-link"
        >
          {next.text} →
        </Link>
      )}
    </div>
  );
};

export default NavButtons;
