// App.js
import React from 'react';
import "./styles.css"
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './components/Routes';
import { CardDataProvider } from './components/CardDataContext';

const App = () => {
  return (
    <Router>
      <CardDataProvider>
        <AppRoutes />
      </CardDataProvider>
    </Router>
  );
};

export default App;
