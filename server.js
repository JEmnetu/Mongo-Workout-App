// Require and instantiate express
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
// Assign port
const PORT = process.env.PORT || 3500;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/exercises";
mongoose.connect(MONGODB_URI);

//Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Requiring routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);