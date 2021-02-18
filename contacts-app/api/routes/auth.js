const express = require("express");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const createJWT = require("../utils/jwt");
const auth = require("../middleware/auth");

// Base: "/api/auth"
const router = express.Router();

// @route    GET api/auth
// @desc     Get logged in user
// @access   Private
router.get("/", auth, async (req, res) => {
  try {
    // Get user from DB
    const user = await User.findById(req.user.id).select("-password"); // Do not return password
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({
      errors: [
        {
          msg: "Can't recover user data at the moment",
        },
      ],
      msg: err.toString(),
    });
  }
});

// @route    POST api/auth
// @desc     Auth user and get token
// @access   Public
const authValidations = [
  check("email", "Invalid email").isEmail(),
  check("password", "Password is required").exists(),
];
router.post(
  "/",
  authValidations, // Validation rules by express-validator
  async (req, res) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      return res.status(400).json({
        msg: "Invalid credentials format.",
        errors: validationErrors.array(),
      });
    }

    const { email, password } = req.body;

    try {
      // Check user existence
      let user = await User.findOne({ email });
      if (!user) {
        res.status(403).json({
          errors: [
            {
              msg: "Credentials do not match any record.",
            },
          ],
        });
      }

      // User exists, check password
      const isMatch = await bcrypt.compare(password, user.password); // Submitted passwd vs DB passwd
      if (!isMatch) {
        return res.status(403).json({
          errors: [
            {
              msg: "Credentials do not match any record.",
            },
          ],
        });
      }

      // Credentials are right, login (grant JWT)
      createJWT(user, null, (token) => {
        return res.status(201).json({ token });
      });
    } catch (err) {
      return res.status(500).json({
        errors: [
          {
            msg: "Unexpected error during the login process.",
          },
        ],
        msg: err.toString(),
      });
    }
  }
);

module.exports = router;
