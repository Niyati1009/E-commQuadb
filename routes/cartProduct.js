const express = require('express');
const { getCart, addItemToCart, removeItemFromCart } = require('../controllers/cartController');
const { authMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getCart);
router.post('/', authMiddleware, addItemToCart);
router.delete('/:id', authMiddleware, removeItemFromCart);

module.exports = router;
