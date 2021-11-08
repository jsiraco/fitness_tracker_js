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

router.post("/workouts", async ({ body }, res) => {
    try {
        const workout = req.body;
        const addWorkout = await Workout.create({ exercises: workout });
        res.status(200).json(addWorkout);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get("/workouts/range", async (req, res) => {
    try {
        const data = await Workout.find().limit(7);
        if (data) {
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