const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res
      .status(401)
      .json({ success: false, msg: "No token, authorization denied" });
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ success: false, msg: "No token, authorization denied" });
  }

  const payload = verifyToken(token, process.env.JWT_SECRET);
  if (!payload) {
    return res
      .status(401)
      .json({ success: false, msg: "Invalid token, authorization denied" });
  }
  req.user = payload;
  next();
};

const verifyToken = (token, secretKey) => {
  return jwt.verify(token, secretKey);
};

module.exports = authenticate;
