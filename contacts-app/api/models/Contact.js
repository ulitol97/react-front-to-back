const mongoose = require("mongoose");
const types = require("../utils/types");

const ContactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  type: {
    type: String,
    default: types.personal,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("contact", ContactSchema);
