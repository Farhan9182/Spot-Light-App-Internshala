// Routes.js
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Signup from './signup';
import Logout from './Logout';
import Homepage from './Homepage';
import EventDetails from './EventDetails';
import CardDetails from './CardDetails';

// Check if the user is authenticated (has a valid JWT)
const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token;
};

// ProtectedRoute component to handle protected routes
const ProtectedRoute = ({ element }) => {
    return isAuthenticated() ? (
    element
    ) : (
        // If not authenticated, navigate to the login page
        <Navigate to="/login" replace />
    );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<ProtectedRoute element={<Homepage />} />} />
      <Route path="/card-details" element={<ProtectedRoute element={<CardDetails />}/>} />
      <Route path="/event-details" element={<ProtectedRoute element={<EventDetails />}/>} />
    </Routes>
  );
};

export default AppRoutes;
