const router = require("express").Router();
const Workout = require("../models/workout.js");

// Last workout duration
router.get("/workouts", async (req, res) => {
    try {
    const dbWorkout = await Workout.find();
    if (dbWorkout) {
        Workout.aggregate(
            [
                {
                    $addFields: {
                        totalDuration: {
                            $sum: "$exercises.duration",
                        },
                    },
                },
            ],
            (err, data) => {
                if (err) {
                    res.status(400).json(err);
                } else {
                    res.json(data);
                }
            }
        )
    }
    } catch (err) {
        res.status(400).json(err);

    }
});

// Range of last 7 workouts
router.get("/workouts/range", async (req, res) => {
    try {
        const dbWorkout = await Workout.find().limit(7);
        if (dbWorkout) {
            Workout.aggregate(
                [
                    {
                        $addFields: {
                            totalDuration: {
                                $sum: "$exercises.duration",
                            },
                        },
                    },
                ],
                (err, data) => {
                    if (err) {
                        res.status(400).json(err);
                    } else {
                        res.json(data);
                    }
                }
            );
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// posts workout
router.post("/workouts", async ({ body }, res) => {
    try {
        const workout = req.body;
        const addWorkout = await Workout.create({ exercises: workout });
        res.status(200).json(addWorkout);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Adds exercise to current workout
router.put("/workouts/:id", async (req, res) => {
    try {
        const id = { _id: mongojs.ObjectId(req.params.id) };
        const workout = req.body;
        const addExercise = await Workout.updateOne(id, {
            $push: { exercises: workout },
        });
        res.status(200).json(addExercise);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;