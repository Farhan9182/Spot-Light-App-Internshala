// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Signup controller
const signup = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new user
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Login controller
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user exists
    const existingUser = await User.findOne({ username });
    if (!existingUser) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Verify the password
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Create and send a JWT token
    const token = jwt.sign(
      { username: existingUser.username, id: existingUser._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Logout controller (Clear the token)
const logout = (req, res) => {
  try {
    res.clearCookie('token');
    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Verify controller (Check if the user is authenticated)
const verify = (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json({ username: decodedData.username, id: decodedData.id });
  } catch (error) {
    console.error('Verify error:', error);
    res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = { signup, login, logout, verify };
