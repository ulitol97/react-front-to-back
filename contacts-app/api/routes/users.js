const express = require("express");
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
      let user = await findUser({ email });

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

      user.password = (await hashPassword(user.password)).hash;

      // Store in DB
      await user.save();

      // Create JWT
      createJWT(user, null, (token) => {
        res.status(201).json({ token });
      });
    } catch (err) {
      res.status(500).send(`Error registering user: ${err}`);
    }
  }
);

async function findUser(query) {
  const user = await User.findOne(query);
  return user;
}

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  return {
    salt,
    hash,
  };
}

const createJWT = (user, expires, callback) => {
  const payload = {
    user: {
      id: user.id,
    },
  };

  jwt.sign(
    payload,
    process.env.JWT_SECRET,
    {
      expiresIn: 3600 * 4 || expires,
    },
    (err, jwt) => {
      if (err) throw err;
      callback(jwt);
    }
  );
};

module.exports = router;
