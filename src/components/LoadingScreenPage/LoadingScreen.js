import React, { useState, useEffect } from "react";
import "./LoadingScreenStyles.scss";
import logo from "../../images/logo-white.png";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //Timer for the LoadingScreen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); //when 2 seconds pass the saturation reverts to normal

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-screen ${isLoading ? "loading" : "loaded"}`}>
      <img src={logo} alt="Logo" className="loading-logo" />
    </div>
  );
};

export default LoadingScreen;
