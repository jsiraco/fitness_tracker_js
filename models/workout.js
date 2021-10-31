const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: { type: String },
            name: { type: String },
            weight: { type: Number },
            duration: { type: Number },
            reps: { type: Number },
            sets: { type: Number }
        }
    ]
})


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;