import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/HomePage/HomePage';
import { Route, Switch } from 'react-router-dom';
import ContactPage from './Pages/ContactPage/ContactPage';
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage';
import AboutPage from './Pages/AboutPage/AboutPage';

function App() {
  return (
    <div className="app">
      <Navbar className="app__navbar" />
      <Switch>
        <Route exact path="/">
          <HomePage className="app__homepage" />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="/portfolio">
          <PortfolioPage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
