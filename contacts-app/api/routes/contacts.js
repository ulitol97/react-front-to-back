const express = require("express");
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const User = require("../models/User");
const Contact = require("../models/Contact");
const types = require("../utils/types");
const { findByIdAndUpdate } = require("../models/User");

// Base: "/api/contacts"
const router = express.Router();

// @route    GET api/contacts
// @desc     Get all user's contacts
// @access   Private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    return res.status(200).json(contacts);
  } catch (err) {
    return res.status(500).json({ msg: `Error listing contacts: ${err}` });
  }
});

// @route    POST api/contacts
// @desc     Create new contact for current user
// @access   Private
const contactCreateValidations = [
  check("name", "Invalid name").isAlpha(),
  check("email", "Invalid email").optional().isEmail(),
  check("surname", "Invalid surname").optional().isAlpha(),
  check("phone", "Invalid phone").optional().isMobilePhone(),
  check("type", "Invalid contact type").isIn(Object.values(types)),
];
router.post("/", [auth, ...contactCreateValidations], async (req, res) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(400).json({
      msg: "Invalid contact information supplied.",
      errors: validationErrors.array(),
    });
  }

  // Create contact based on user info
  const { name, surname, email, phone, type } = req.body;
  let contact = new Contact({
    name,
    surname,
    email,
    phone,
    type,
    user: req.user.id, // Link to the user creating the contact
  });

  try {
    contact = await contact.save();
    return res.status(201).json(contact);
  } catch (err) {
    return res.status(500).send({ msg: `Error creating contact: ${err}` });
  }
});

// @route    PUT api/contacts/:contact-id
// @desc     Update certain user contact
// @access   Private
const contactUpdateValidations = [
  check("name", "Invalid name").optional().isAlpha(),
  check("email", "Invalid email").optional().isEmail(),
  check("surname", "Invalid surname").optional().isAlpha(),
  check("phone", "Invalid phone").optional().isMobilePhone(),
  check("type", "Invalid contact type").optional().isIn(Object.values(types)),
];
router.put(
  "/:contactId",
  [auth, ...contactUpdateValidations],
  async (req, res) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      return res.status(400).json({
        msg: "Invalid contact information supplied.",
        errors: validationErrors.array(),
      });
    }
    // Store the fields to be updated based on user info
    const fieldsToUpdate = req.body;
    Object.keys(fieldsToUpdate).forEach(
      (key) => fieldsToUpdate[key] === undefined && delete fieldsToUpdate[key]
    );

    try {
      let contact = await Contact.findById(req.params.contactId);
      if (!contact) {
        return res.status(404).json({
          msg: "The contact provided for update could not be found.",
        });
      }
      if (!contactBelongsToUser(contact, req.user)) {
        return res.status(401).json({
          msg: "Unauthorized.",
        });
      }
      // Update on DB
      contact = await Contact.findByIdAndUpdate(
        req.params.contactId,
        { $set: fieldsToUpdate },
        { new: true }
      );
      return res.status(201).json(contact);
    } catch (err) {
      return res.status(500).send({ msg: `Error updating contact: ${err}` });
    }
  }
);

// @route    DELETE api/contacts/:contactId
// @desc     Delte certain user contact
// @access   Private
router.delete("/:contactId", auth, async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.contactId);
    if (!contact) {
      return res.status(404).json({
        msg: "The contact provided for deletion could not be found.",
      });
    }
    if (!contactBelongsToUser(contact, req.user)) {
      return res.status(401).json({
        msg: "Unauthorized.",
      });
    }
    // Remove on DB
    await Contact.findByIdAndRemove(req.params.contactId);
    return res.sendStatus(204);
  } catch (err) {
    return res.status(500).json({ msg: `Error removing contact: ${err}` });
  }
});

function contactBelongsToUser(contact, user) {
  return contact.user.toString() == user.id;
}

module.exports = router;
