// models/User.js
const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
