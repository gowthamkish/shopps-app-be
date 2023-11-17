const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: String,
    email: {
      type: String,
      index: {
        unique: true,
      },
    },
    password: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);
