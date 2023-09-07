// routes/cards.js
const express = require('express');
const router = express.Router();
const { getCards, createCard, updateCard, deleteCard } = require('../controllers/cardController');
const { authenticateUser } = require('../middleware/authMiddleware');

// Get all cards arranged by card types
router.get('/cards', authenticateUser, getCards);

// Create a card
router.post('/cards', authenticateUser, createCard);

// Update a card
router.put('/cards/:cardId', authenticateUser, updateCard);

// Delete a card
router.delete('/cards/:cardId', authenticateUser, deleteCard);

module.exports = router;
