// routes/profile.js
const express = require('express');
const router = express.Router();
const { getUserProfile, updateUserProfile } = require('../controllers/profileController');
const { authenticateUser } = require('../middleware/authMiddleware');

// Get user profile
router.get('/profile', authenticateUser, getUserProfile);

// Update user profile
router.put('/profile', authenticateUser, updateUserProfile);

module.exports = router;
