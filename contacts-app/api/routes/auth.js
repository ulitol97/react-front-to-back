const express = require("express");

// Base: "/api/auth"
const router = express.Router();

// @route    GET api/auth
// @desc     Get logged in user
// @access   Private
router.get("/", (req, res) => {
  res.send("Get current user.");
});

// @route    POST api/auth
// @desc     Auth user and get token
// @access   Public
router.post("/", (req, res) => {
  res.send("Login user.");
});

module.exports = router;
