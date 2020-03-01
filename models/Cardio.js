let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let CardioSchema = new Schema({
    nameInput:{
        type:String,
        trim:true,
        required:"Provide a name for this workout."
    },
    durationInput:{
        type:Number,
        trim:true,
        required:"Provide an exercise duration."
    },
    distanceInput:{
        type:Number,
        trim:true,
        required:"Provide a distance"
    }

})

let Cardio = mongoose.model("Cardio", CardioSchema);

module.exports = Cardio;