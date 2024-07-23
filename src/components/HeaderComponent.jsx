import React, { useState } from 'react';
import './HeaderComponent.css'; // Importing custom CSS
import EyeIcon from './EyeIcon'; // Importing an icon component

const HeaderComponent = () => {
  const [isVisible, setIsVisible] = useState(false); // useState hook to manage visibility state

  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Toggling the visibility state
  };

  return (
    <div className="min-vw-100 position-relative min-vh-100 d-flex justify-content-center align-items-center animate-bgChange">
      <div className="card p-4 shadow-lg text-center">
        <div className="icon-container">
          <EyeIcon /> {/* Rendering the EyeIcon component */}
        </div>
        <h1 className="text-2xl font-bold mb-3">Charan</h1>
        <p className="text-gray-600 mb-3">Registration No: 212221040067</p>
        <button
          onClick={toggleVisibility}
          className="btn btn-primary rounded-pill px-4 mb-3"
        >
          {isVisible ? 'Hide Details' : 'Show Details'}
        </button>
        {isVisible && (
          <div className="text-gray-700">
            Saveetha Engineering College...
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderComponent; // Exporting the HeaderComponent