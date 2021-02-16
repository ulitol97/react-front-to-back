const express = require("express");

// Base: "/api/contacts"
const router = express.Router();

// @route    GET api/contacts
// @desc     Get all user's contacts
// @access   Private
router.get("/", (req, res) => {
  res.send("Get user contacts.");
});

// @route    POST api/contacts
// @desc     Create new contact for current user
// @access   Private
router.post("/", (req, res) => {
  res.send("Create user contact.");
});

// @route    PUT api/contacts/:contact-id
// @desc     Update certain user contact
// @access   Private
router.put("/", (req, res) => {
  res.send("Update user contact.");
});

// @route    DELETE api/contacts/:contact-id
// @desc     Delte certain user contact
// @access   Private
router.delete("/", (req, res) => {
  res.send("Delete user contact.");
});

module.exports = router;
