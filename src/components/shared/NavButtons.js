import React from 'react';
import { Link } from 'react-router-dom';

const NavButtons = ({ previous, next, singleButtonPosition }) => {
  // Function to scroll to top when navigating
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  // If singleButtonPosition is specified and there's only one button,
  // use that position, otherwise use default layout
  const containerClass = `nav-buttons-container ${
    singleButtonPosition ? `single-button-${singleButtonPosition}` : ''
  }`;

  return (
    <div className="nav-buttons">
      <div className={containerClass}>
        {previous && (
          <Link 
            to={previous.link} 
            className="nav-button"
            onClick={handleClick}
          >
            ← {previous.text}
          </Link>
        )}
        {next && (
          <Link 
            to={next.link} 
            className="nav-button"
            onClick={handleClick}
          >
            {next.text} →
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavButtons;
