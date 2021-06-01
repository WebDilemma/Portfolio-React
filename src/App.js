import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div className="app">
      <Navbar className="app__navbar" />
      <HomePage className="app__homepage" />
    </div>
  );
}

export default App;
