const router = require("express").Router();
const Workout = require("../models/workout.js");

// router.post("/api/")

router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .sort({ day: -1 })
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/stats", (req, res) => {
    Workout.find({})
    .sort({ day: -1 })
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/exercise", (req, res) => {
    Workout.find({})
    .sort({ day: -1 })
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;