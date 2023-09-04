const User = require('../models/User');

// Get user profile
const getUserProfile = async (req, res) => {
  try {
    // Access user data from the authenticated user (req.user)
    const { username, id } = req.user;

    // Retrieve user profile data from the database
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const userProfile = {
      username: user.username,
      // Add more profile fields here
    };

    res.status(200).json(userProfile);
  } catch (error) {
    console.error('Get user profile error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update user profile
const updateUserProfile = async (req, res) => {
  try {
    // Access user data from the authenticated user (req.user)
    const { id } = req.user;

    // Update user profile data in the database
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    const userProfile = {
      username: updatedUser.username,
      // Add more profile fields here
    };

    res.status(200).json(userProfile);
  } catch (error) {
    console.error('Update user profile error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { getUserProfile, updateUserProfile };
