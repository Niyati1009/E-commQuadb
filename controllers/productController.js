const Product = require('../models/Product');

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching products', error });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).send({ message: 'Product not found' });
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching product', error });
  }
};

const createProduct = async (req, res) => {
  const { name, description, price, image } = req.body;
  try {
    const product = new Product({ name, description, price, image });
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(500).send({ message: 'Error creating product', error });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return res.status(404).send({ message: 'Product not found' });
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send({ message: 'Error updating product', error });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).send({ message: 'Product not found' });
    res.status(200).send({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).send({ message: 'Error deleting product', error });
  }
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };
