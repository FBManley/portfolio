import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './app/Home';
import Projects from './app/Projects';
import Projectcard from './app/Projectcard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Projectcard />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
