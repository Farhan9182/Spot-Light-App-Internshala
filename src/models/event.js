// models/User.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  year: { type: Number, required: true },
  eventHeader: { type: String, required: true },
  provider: { type: String, required: true },
  facility: { type: String, required: true },
  eventType: { type: String, required: true },
  references: { type: Array, required: true },
  reference: { type: Number, required: true },
  serviceDate: { type: String, required: true },
  resourceType: { type: String, required: true },
  cost: { type: String, required: false },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
