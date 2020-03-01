let mongoose = require("mongoose");

let Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day:{
        type:Date,
        default:Date.now
    },
    exercises:[{
        type:{ type: String},
        name: {type: String},
        duration: { type: Number},
        weight: {type: Number},
        reps: {type: Number},
        sets: { type: Number},
        distance: { type: Number}
    }]

});

let Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;