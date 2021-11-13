import React from 'react';
import './App.css';
import Navbar from './navbar/Navbar'
import Sidebar from './navbar/Sidebar'
function App() {
  return (
    <div className="">
      <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3 col-md-4 nav">
          <Navbar/>
        </div>
        <div className="col-sm-9 col-md-8 big">
          <hr/>
          
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
