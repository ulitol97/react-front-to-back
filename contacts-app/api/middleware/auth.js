// Middleware fires when an endpoint is reached
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

module.exports = function (req, res, next) {
  // Check for tokens in header
  const token = req.header("x-auth-token");
  if (!token) {
    return res
      .status(401)
      .json({ msg: "Invalid credentials. Token not present." });
  }

  // Token is present, verify
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Store decoded token and move on
    req.user = decoded.user;
    next();
  } catch (err) {
    return res
      .status(401)
      .json({ msg: "Invalid credentials. Token was invalid." });
  }
};
