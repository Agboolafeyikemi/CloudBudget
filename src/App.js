import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import AboutUs from './components/AboutUs/About';
import Feature from './components/Feature/feature';

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutUs/>
      <Feature/>
    </div>
  );
}

export default App;
