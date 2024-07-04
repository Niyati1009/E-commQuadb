const Cart = require('../models/Cart');
const Product = require('../models/Product');

const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.userId }).populate('items.productId');
    if (!cart) return res.status(404).send({ message: 'Cart not found' });
    res.status(200).send(cart);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching cart', error });
  }
};

const addItemToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).send({ message: 'Product not found' });

    let cart = await Cart.findOne({ userId: req.user.userId });
    if (!cart) {
      cart = new Cart({ userId: req.user.userId, items: [] });
    }
    const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }
    await cart.save();
    res.status(201).send(cart);
  } catch (error) {
    res.status(500).send({ message: 'Error adding item to cart', error });
  }
};

const removeItemFromCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.userId });
    if (!cart) return res.status(404).send({ message: 'Cart not found' });

    const itemIndex = cart.items.findIndex(item => item._id.toString() === req.params.id);
    if (itemIndex > -1) {
      cart.items.splice(itemIndex, 1);
      await cart.save();
      res.status(200).send(cart);
    } else {
      res.status(404).send({ message: 'Item not found in cart' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Error removing item from cart', error });
  }
};

module.exports = { getCart, addItemToCart, removeItemFromCart };
