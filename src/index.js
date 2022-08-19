import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './interviewtest/App';
import reportWebVitals from './reportWebVitals';

// eslint-disable-next-line
{/*import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import { AppProvider } from './context';
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
); */}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
