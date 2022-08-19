import React from 'react';
import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';
import Content from './Content';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MobileNavbar/>
      <Content/>
    </div>
  );
}

export default App;
