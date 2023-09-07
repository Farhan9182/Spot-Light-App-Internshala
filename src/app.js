const express = require('express');
const cors = require('cors'); // CORS middleware if needed
// const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors()); // CORS for cross-origin requests if needed
// app.use(cookieParser()); // Parse cookies if needed
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
const testRoutes = require('./routes/test');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const cardRoutes = require('./routes/cards');
const eventRoutes = require('./routes/events');

app.use('/test', testRoutes); // Test routes
app.use('/auth', authRoutes); // Authentication routes
app.use('/user', profileRoutes); // User profile routes
app.use('/cards', cardRoutes); // Cards retrieval routes
app.use('/events', eventRoutes); // Event routes
/** Error handling */
app.use((req, res) => {
    const error = new Error('route not found');
    return res.status(404).json({
      code: '00004',
      message: "Route not found",
    });
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
