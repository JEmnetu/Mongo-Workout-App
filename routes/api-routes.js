const express = require("express");
const app = express();

app.get("/stats", (req, res) => {
    res.send("stats");
})