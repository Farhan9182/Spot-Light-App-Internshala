// routes/auth.js
const express = require('express');
const router = express.Router();
const { signup, login, logout, verify } = require('../controllers/authController');

// Signup route
router.post('/signup', signup);

// Login route
router.post('/login', login);

// Logout route
router.post('/logout', logout);

// Verify route
router.get('/verify', verify);

module.exports = router;
