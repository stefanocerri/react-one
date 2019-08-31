import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./Home";
import "./scss/main.scss";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
};

export default App;
