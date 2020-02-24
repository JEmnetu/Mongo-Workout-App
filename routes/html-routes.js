const express = require("express");
const app = express();
const path = require("path");

module.exports = (app) => {

    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname + "/../public/stats.html"));
    });
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname + "/../public/exercise.html"));
    })
}