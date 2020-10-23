const db = require("../models")
const router = require("express").Router();

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
});
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .sort({day: -1})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
});
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//non working route
router.post("/api/workouts", (req, res) => {
    console.log("working?");
    console.log(req.body);
    db.Workout.create(req.body)
      .then(dbWorkout => {
          console.log(dbWorkout);
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
});
//error Workout is not defined
router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      req.params.id,
      { $push: { exercises: req.body } },
      { new: true, runValidators: true }
    )
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
module.exports = router;