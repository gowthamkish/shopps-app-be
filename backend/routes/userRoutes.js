const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
  getCurrentUser,
} = require("../controllers/userController");

const { protected } = require("../middleware/authMiddleware");

router.post("/", createUser);
router.post("/login", loginUser);
router.get("/me", protected, getCurrentUser);

// router.route("/").get(getUsers).post(createUser);

// router.route("/:id").put(updateUser).delete(deleteUser);

module.exports = router;
