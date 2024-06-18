import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import TopBarNav from "./components/TopBar/TopBarNav";
import FooterWrapper from "./components/Footer/FooterWrapper";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="top-bar-container">
           <TopBarNav />
        </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > 
          Learn React
        </a>
      </header>
      <div className="footer-container">
           <FooterWrapper />
         </div>
    </div>
    </BrowserRouter>
  
  );
}

export default App;

//   <BrowserRouter>
  //   <div className="App">
  //       <div className="top-bar-container">
  //         <TopBarNav />
  //       </div>
  //     <div className="content-wrapper">
  //       <ContentWrapperComponent />
  //     </div>
  //      <div className="footer-container">
  //         <FooterWrapper />
  //       </div>
  //   </div>
  // </BrowserRouter>
