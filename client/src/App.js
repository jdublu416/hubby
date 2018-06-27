import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Widget from "./components/Widget";
import './App.css';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Widget} />
        <Route exact path="/widget" component={Widget} />
      </Switch>
    </div>
  </Router>
);

export default App;
