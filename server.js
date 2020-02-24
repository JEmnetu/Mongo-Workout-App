// Require and instantiate express
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
// Assign port
const PORT = process.env.PORT || 3500;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/exercises";
mongoose.connect(MONGODB_URI);
db = mongoose.connection;


db.once('open', () => {
    console.log('Connected to MongoDB');
})

//check for any db errors
db.on('error', (err) => {
    console.log(err)
});


//Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Requiring routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);


app.listen(PORT, () => {
    console.log(`Server is listening on Port ${PORT}!`);
});