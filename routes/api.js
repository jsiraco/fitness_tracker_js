const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/workouts", (req, res) => {
    Workout.find({})
        .sort({ day: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.status(400).json(err);
        });
});

router.get("/workouts/range", (req, res) => {
    Workout.find({})
        .sort({ day: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.status(400).json(err);
        });
});

router.post("/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(body => {
            res.json(body);
        }).catch(err => {
            res.status(400).json(err);
        });
});

router.put("/exercise", ({ body }, res) => {
    router.put("/:id", async (req, res) => {
        try {
            const query = { _id: mongojs.ObjectId(req.params.id) };
            const workout = req.body;
            const addExercise = await Workout.updateOne(query, {
                $push: { exercises: workout },
            });
            res.status(200).json(addExercise);
        } catch (err) {
            res.status(500).json(err);
        }
    });
});


module.exports = router;