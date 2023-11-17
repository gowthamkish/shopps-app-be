const Products = require("../model/productModel");

const asyncHandler = require("express-async-handler");

const getProducts = asyncHandler(async (req, res) => {
  console.log("Products", Products);
  const products = await Products.find({ user: req.user.id });
  res.status(200).json(products);
});

const addNewProduct = asyncHandler(async (req, res) => {
  const newProduct = await Products.create({
    user: req.user.id,
    productName: req.body.productName,
    productTitle: req.body.productTitle,
    productDescription: req.body.productDescription,
    productCategory: req.body.productCategory,
    productPrice: req.body.productPrice,
  });
  res.status(200).json(newProduct);
});

const updateProduct = asyncHandler(async (req, res) => {
  const product = await Products.findById(req.params.id);

  if (!product) {
    res.status(400).json({ message: "Product not found" });
  }

  const user = await User.findById(req.user.id);

  // Check for user

  if (!user) {
    res.status(401).json({ message: "User not found" });
  }

  // Make sure only logged in user matches the product user
  if (product.user.toString() !== user.id) {
    res.status(401).json({ message: "User not authorized" });
  }

  const updatedProduct = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedProduct);
});

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Products.findById(req.params.id);

  if (!product) {
    res.status(400).json({ message: "User not found" });
  }

  await delete product;

  res.status(200).json({ id: req.params.id });
});

module.exports = { getProducts, addNewProduct, updateProduct, deleteProduct };
