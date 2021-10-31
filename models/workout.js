const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: ,
            name: ,
            weight: ,
            reps: ,
            sets: 
        }
    ]
})