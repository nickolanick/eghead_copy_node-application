const express = require('express');
const Course = require('../db').Course;
const Lesson = require('../db').Lesson;
const passport = require('passport');
const api = express.Router();

api.get('/courses', passport.authenticate('jwt', (session = false)), async (req, res) => {
        try {
            let data = await Course.find().exec();
            res.send(data)
        } catch (e) {
            res.status(500).send(e)
        }
    },
);

api.post('/courses', passport.authenticate('jwt', (session = false)), async (req, res) => {
        try {
            req.body.author = req.user["_id"];
            let course = new Course(req.body);
            let result = await course.save();
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
        }
    },
);


api.get('/lessons', passport.authenticate('jwt', (session = false)), async (req, res) => {
    try {
        let data = await Lesson.find().exec();
        res.send(data)
    } catch (e) {
        res.status(500).send(e)
    }
});


api.post('/lessons', passport.authenticate('jwt', (session = false)), async (req, res) => {
        try {
            req.body.author = req.user["_id"];
            let lesson = new Lesson(req.body);
            let result = await lesson.save();
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
        }
    },
);
module.exports = api;
