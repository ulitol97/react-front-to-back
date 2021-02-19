const dotenv = require("dotenv");
const express = require("express");
const connectDb = require("./config/db");
const path = require("path");
dotenv.config();

// Connect to DB
connectDb();

// Start express server
const app = express();
app.use(express.json({ extended: false })); // Middleware
runServer(app);

function runServer() {
  // Routes
  const routes = {
    users: require("./routes/users"),
    auth: require("./routes/auth"),
    contacts: require("./routes/contacts"),
  };

  app.use("/api/users", routes.users);
  app.use("/api/auth", routes.auth);
  app.use("/api/contacts", routes.contacts);

  // Serve static assets in production
  if (process.env.NODE_ENV === "production") {
    // Assets folder
    app.use(express.static("client/build"));
    // Serve built index.html on any request
    app.get("*", (req, res) =>
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    );
  }

  // Launch
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
}
