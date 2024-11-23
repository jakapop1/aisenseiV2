import React from 'react';
import { Link } from 'react-router-dom';

const NavButtons = ({ previous, next }) => {
  return (
    <div className="nav-buttons flex justify-between mt-8">
      {previous && (
        <Link 
          to={previous.link} 
          className="text-blue-600 hover:text-blue-800"
        >
          ← {previous.text}
        </Link>
      )}
      {next && (
        <Link 
          to={next.link} 
          className="text-blue-600 hover:text-blue-800"
        >
          {next.text} →
        </Link>
      )}
    </div>
  );
};

export default NavButtons;
