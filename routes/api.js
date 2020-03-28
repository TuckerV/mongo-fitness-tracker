// API Routing
const db = require('../models');

module.exports = function (app) {
    app.get('/api/workouts', function (req, res) {
        db.Workout.find({}).then(function (dbWorkouts){
            res.json(dbWorkouts)
        })
    })
    app.get('/api/workouts/range', function (req, res) {
        db.Workout.find({}).then(function (dbWorkouts) {
            res.json(dbWorkouts)
        })
    })
    app.put('/api/workouts/:id', function (req, res) {
        db.Workout.update({ _id: req.params.id }, {$push: { 'exercises': req.body } }).then(function (dbWorkouts) {
            res.json(dbWorkouts)
        })
    })
    app.post('/api/workouts', function(req, res) {
        db.Workout.create(req.body).then(function (dbWorkouts) {
            res.json(dbWorkouts)
        }).catch(err => {
            res.status(400).json(err);
        })
    })
};