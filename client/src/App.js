import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './pages/Main';
// import Home from "./pages/Home";
import './App.css';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Main" component={Main} />
      </Switch>
    </div>
  </Router>
);

export default App;
