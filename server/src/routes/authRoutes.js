const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const authenticate = require("../middleware/authMiddleware");

const authRouter = express.Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.get("/check-auth", authenticate, (req, res) => {
  const user = req.user;
  res
    .status(200)
    .json({ success: true, message: "User is authenticated", data: user });
});

module.exports = authRouter;
