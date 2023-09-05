// routes/cards.js
const express = require('express');
const router = express.Router();
const { getObservations, getConditions, getImmunizations } = require('../controllers/cardController');
const { authenticateUser } = require('../middleware/authMiddleware');

// Get observations
router.get('/observations', authenticateUser, getObservations);

// Get conditions
router.get('/conditions', authenticateUser, getConditions);

// Get immunizations
router.get('/immunizations', authenticateUser, getImmunizations);

module.exports = router;
