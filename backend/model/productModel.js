const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },
    productName: String,
    productTitle: String,
    productDescription: String,
    productCategory: String,
    productPrice: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("products", productSchema);
