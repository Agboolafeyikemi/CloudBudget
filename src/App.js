import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/About";
import Feature from "./components/Feature/feature";
import Technology from "./components/Technology/technology";
import AppDownload from './components/Appdownload/Appdownload';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <Feature />
      <Technology />
      <AppDownload/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
