import React, { useState, useEffect } from 'react';
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreenPage/LoadingScreen";
import TopBarNav from "./components/TopBar/TopBarNav";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
import FooterWrapper from "./components/Footer/FooterWrapper";

import './i18n.js';
import LanguageDetectorComponent from './LanguageDetectorComponent'; // Import the language detector component


const App = () => { //KATHE FORA POU KANEI RELOAD BGAINEI TO LOADING
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // loading time?
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); //duration of the loading screen
              //After 5 seconds, page is shown

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
    <LanguageDetectorComponent>
      <div className="App">
        <div className="top-bar-container">
          {/* <TopBarNav /> */}
          {isLoading ? <LoadingScreen /> : <TopBarNav />}
        </div>
        <div className="content-wrapper">
          <ContentWrapper />
          {/* {isLoading ? <LoadingScreen /> : <ContentWrapper />} */}
        </div>
        <div className="footer-container">
          <FooterWrapper />
        </div>
      </div>
      </LanguageDetectorComponent>
    </BrowserRouter>
  );
}

export default App;
