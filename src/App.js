import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
