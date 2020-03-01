// const express = require("express");
// const app = express();



// module.exports = (app) => {

// }
const express = require("express");
const app = express();

let Exercise = require("../models/exercise.js");

module.exports = (app) => {
    app.post("/api/workouts", (req, res) => {
        console.log(req);
        let exercise = new Exercise();
        exercise.exerciseType = req.body.type;
        exercise.exerciseName = req.body.name;

        exercise.save((err) => {
            if (err) {
                console.log(err);
                return;
            } else {
                console.log("exercise logged");
            }
        })
    })
}