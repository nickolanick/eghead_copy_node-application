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

api.get('/lessons', passport.authenticate('jwt', (session = false)), async (req, res) => {
    try {
        let data = await Lesson.find().exec();
        res.send(data)
    } catch (e) {
        res.status(500).send(e)
    }
});

module.exports = api;
