// Database setup
const mongoose = require("mongoose");
const config = require("config");
const dotenv = require("dotenv");
dotenv.config();

const db = config
  .get("mongoURI") // Base connection string from config file
  .replace("[MONGO_USER_NAME]", process.env.MONGO_USER_NAME) // Replace with real user and password from env
  .replace("[MONGO_USER_PASSWORD]", process.env.MONGO_USER_PASSWORD)
  .replace("[MONGO_DATABASE]", process.env.MONGO_DATABASE);

async function connectDb() {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected.");
  } catch (err) {
    console.log(`Error connecting to DB: ${err}`);
    process.exit(1); // Exit with failure
  }
}

module.exports = connectDb;
