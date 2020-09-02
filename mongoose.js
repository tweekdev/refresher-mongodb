const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose
  .connect(
    'mongodb+srv://tweekdev:Moitja54@cluster0.83jp8.mongodb.net/products_test?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('connected to the database!');
  })
  .catch(() => {
    console.log('connexion failed!');
  });

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });

  const result = await createdProduct.save();
  res.json(result);
};

const getProduct = async (req, res, next) => {
  const products = await Product.find().exec();
  res.json(products);
};

exports.createProduct = createProduct;
exports.getProduct = getProduct;
