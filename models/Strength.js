let mongoose = require("mongoose");

let Schema = mongoose.Schema;

const StrengthSchema = new Schema({
    nameInput: {
        type:String,
        trim:true,
        require:"Exercise name is required"
    },
    weightInput:{
        type:Number,
        trim:true,
        require:"Exercise weight is required"
    },
    setsInput:{
        type:Number,
        trim:true,
        require:"Enter number of sets"
    },
    reptsInput:{
        type:Number,
        trim:true,
        required:"Enter number of reps"
    },
    durationInput:{
        type:Number,
        trim:true,
        required:"Enter the duration of the exercise"
    }

});

const Strength = mongoose.model("Strength", StrengthSchema);

module.exports = Strength;