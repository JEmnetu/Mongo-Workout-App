let mongoose = require("mongoose");

//Exercise Scehma
let exerciseSchema = mongoose.Schema({
    exerciseType: {
        type: String,
        required: true
    },
    exerciseName: {
        type: String,
        required: true
    },
    distance: {
        type: Number,
        required: false
    },
    duration: {
        type: Number,
        required: false
    },
    weight: {
        type: Number,
        required: false
    },
    sets: {
        type: Number,
        required: false
    },
    reps: {
        type: Number,
        required: false
    }
})

let Exercise = module.exports = mongoose.model('Exercise', exerciseSchema);