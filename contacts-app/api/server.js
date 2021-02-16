const express = require("express");

// Set up express server
const PORT = process.env.PORT || 5000;
const app = express();

// Routes
const routes = {
  users: require("./routes/users"),
  auth: require("./routes/auth"),
  contacts: require("./routes/contacts"),
};

app.use("/api/users", routes.users);
app.use("/api/auth", routes.auth);
app.use("/api/contacts", routes.contacts);

// Launch
app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
