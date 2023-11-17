const express = require("express");
const router = express.Router();
const {
  getProducts,
  addNewProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const { protected } = require("../middleware/authMiddleware");

router.route("/").get(protected, getProducts).post(protected, addNewProduct);

router
  .route("/:id")
  .put(protected, updateProduct)
  .delete(protected, deleteProduct);

module.exports = router;
