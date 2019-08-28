import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./Home";
import Page from "./Page";
import "./scss/main.scss";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/chi-siamo" component={Page} />
          <Route path="/homeciao" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
