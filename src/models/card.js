// models/User.js
const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  year: { type: Number, required: true },
  eventType: { type: String, required: true },
  references: { type: Array, required: true },
  reference: { type: Number, required: true },
  serviceDate: { type: String, required: true },
  resourceType: { type: String, required: true },
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
