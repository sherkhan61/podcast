import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Footer, Header} from "./components/ui";
import Routes from "./Routes";

import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  return (
      <div>
        <BrowserRouter>
          <Header/>
          <Routes/>
          <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;
