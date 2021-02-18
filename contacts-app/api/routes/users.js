const express = require("express");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const createJWT = require("../utils/jwt");

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
      return res.status(400).json({
        msg: "Invalid user information",
        errors: validationErrors.array(),
      });
    }

    // Request body contains validated data
    const { name, surname, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(403).json({
          errors: [
            {
              msg: "User already exists",
            },
          ],
        });
      }

      // Create user instance and hash password
      user = new User({
        name,
        surname,
        email,
        password,
      });

      user.password = (await hashPassword(user.password)).hash;

      // Store in DB
      await user.save();

      // Create JWT
      createJWT(user, null, (token) => {
        return res.status(201).json({ token });
      });
    } catch (err) {
      return res.status(500).send(`Error registering user: ${err}`);
    }
  }
);

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  return {
    salt,
    hash,
  };
}

module.exports = router;
