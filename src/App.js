import { BrowserRouter as Router, Switch , Route,Link } from "react-router-dom";
import Hero from "./components/Hero";
import React, { Component }  from 'react';
import Header from "./components/Header";
import Home from "./components/Home";
// import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Hero />
        </Route>

        <Route exact path="/channels">
          <Home />
        </Route>

        <Route exact path="/channels/:id">
          <Home />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
