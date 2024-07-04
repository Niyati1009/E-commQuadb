const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) return res.status(401).send({ message: 'Access denied, no token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send({ message: 'Invalid token' });
  }
};

const adminMiddleware = (req, res, next) => {
  if (!req.user.isAdmin) return res.status(403).send({ message: 'Access denied' });
  next();
};

module.exports = { authMiddleware, adminMiddleware };
