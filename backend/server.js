require("dotenv").config({ path: ".env" });
const cors = require("cors");
const express = require("express");
const UserRoute = require("./Route/UserRoute");
const AppointmentRoute = require("./Route/AppointmentRoute");

const mongoose = require("mongoose");

const URL = process.env.MONGODB_URI;

// Spin up server on PORT 5000
const app = express();

app.listen(process.env.PORT, () => {
  console.log("Listening on PORT 5000");
});

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

// Connecting to MongoDB
mongoose
  .connect(URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error Connecting: " + err));

// Enable CORS
app.use(cors());
app.use("/", UserRoute);
app.use("/", AppointmentRoute);
