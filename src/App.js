// App.js
import React from 'react';
import "./styles.css"
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './components/Routes';

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
