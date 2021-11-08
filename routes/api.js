const router = require("express").Router();
const path = require("path");
const Workout = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .sort({ day: -1 })
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.get("/stats", (req, res) => {
    Workout.find({})
    .sort({ day: -1 })
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.get("/exercise", (req, res) => {
    Workout.find({})
    .sort({ day: -1 })
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.post("api/exercise", ({body}, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;