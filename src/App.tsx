import React from "react";

import Home from "./pages/home";
import "./App.css";

const App: React.FC = () => {
  /*
    Not using routing, as we are showing just one data-grid component on a single page i. e. (Home).
    If required, we could install and use routing as well. 
  */
  return <Home />;
};

export default App;
