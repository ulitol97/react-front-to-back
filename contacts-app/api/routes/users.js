const express = require("express");
const user = require("../models/User");
const { check, validationResult } = require("express-validator/check");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

// Base: "/api/users"
const router = express.Router();

// @route    POST api/users
// @desc     Register a user
// @access   Public
const registerValidations = [
  check("name", "Name is required").not().isEmpty(),
  check("surname", "Surname is required").not().isEmpty(),
  check("email", "Invalid email").isEmail(),
  check("password", "Password must be 6+ characters long").isLength({ min: 6 }),
];
router.post(
  "/",
  registerValidations, // Validation rules by express-validator
  async (req, res) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      return res.status(400).json({ errors: validationErrors.array() });
    }

    // Request body contains validated data
    const { name, surname, email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) {
        res.status(403).json({ msg: "User already exists" });
      }

      // Create user instance and hash password
      user = new User({
        name,
        surname,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // Store in DB
      await user.save();

      // Create JWT
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
          expiresIn: 3600 * 4,
        },
        (err, token) => {
          if (err) throw err;
          res.status(201).json({ token });
        }
      );
    } catch (err) {
      res.status(500).send(`Error registering user: ${err}`);
    }
  }
);

module.exports = router;
