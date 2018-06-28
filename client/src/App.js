import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import './App.css';

const App = () => (
  <Router>
    <div>
      <Switch>

        <Route exact path="/" component={Main} />
        <Route exact path="/Home" component={Main} />
      </Switch>
    </div>
  </Router>
);

export default App;
