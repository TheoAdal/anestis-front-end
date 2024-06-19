import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import TopBarNav from "./components/TopBar/TopBarNav";
import FooterWrapper from "./components/Footer/FooterWrapper";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="top-bar-container">
          <TopBarNav />
        </div>
        <div className="content-wrapper">
          <ContentWrapper /> 
        </div>
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
