// models/User.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
