import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/HomePage/HomePage';
import { Route, Switch } from 'react-router-dom';
import ContactPage from './Pages/ContactPage/ContactPage';

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
      </Switch>
    </div>
  );
}

export default App;
