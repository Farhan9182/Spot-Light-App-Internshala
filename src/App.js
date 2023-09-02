// src/App.js
import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import CardDetails from './components/CardDetails';
import EventDetails from './components/EventDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/card-details" element={<CardDetails />} />
          <Route path="/event-details" element={<EventDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
