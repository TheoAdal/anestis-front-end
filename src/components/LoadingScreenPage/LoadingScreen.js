import React, { useState, useEffect } from 'react';
import './LoadingScreenStyles.scss';
import logo from '../../images/sitelogo2.png'; // Adjust the path to your logo

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); //when 2 seconds pass the saturation reverts to normal

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-screen ${isLoading ? 'loading' : 'loaded'}`}>
      <img src={logo} alt="Logo" className="loading-logo" />
    </div>
  );
};

export default LoadingScreen;
