// routes/events.js
const express = require('express');
const router = express.Router();
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/eventController');
const { authenticateUser } = require('../middleware/authMiddleware');

// Get events
router.get('/events', authenticateUser, getEvents);

// Create an event
router.post('/events', authenticateUser, createEvent);

// Update an event
router.put('/events/:eventId', authenticateUser, updateEvent);

// Delete an event
router.delete('/events/:eventId', authenticateUser, deleteEvent);

module.exports = router;
