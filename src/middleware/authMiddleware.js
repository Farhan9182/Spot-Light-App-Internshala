const jwt = require('jsonwebtoken');

// Middleware to authenticate users using JWT
const authenticateUser = (req, res, next) => {
  try {
    // Check if a token is included in the request headers
    const token = req.header('x-auth-token');

    // If no token is provided, return an unauthorized response
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Verify the token using your JWT secret key
    jwt.verify(token, process.env.JWT_SECRET, (error, decodedData) => {
      if (error) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      // Attach the decoded user data to the request for further use
      req.user = decodedData;
      next();
    });
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { authenticateUser };
