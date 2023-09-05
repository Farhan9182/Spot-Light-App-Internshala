// routes/test.js
const express = require('express');
const router = express.Router();
const { test } = require('../controllers/testController');

// Signup route
router.get('/test', test);

// Login route
router.post('/test', test);

// Logout route
router.patch('/test', test);

// Verify route
router.delete('/test', test);

module.exports = router;
