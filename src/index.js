import React from 'react';
import ReactDOM  from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { createRoot } from 'react-dom/client';
import {BrowserRouter } from 'react-router-dom';
// import { composeWithDevTools } from '@redux-devtools/extension';
const domNode = document.getElementById('root');
const root = createRoot(domNode);

// const root = ReactDOM.createRoot(document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  domNode
);

reportWebVitals();
