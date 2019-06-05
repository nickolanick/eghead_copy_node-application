const express = require("express");
const Course = require("../db").Course;
const Lesson = require("../db").Lesson;


const main_router = express.Router();
main_router.get('/list_courses', (req, res) => {
    Course.find({}, (err, data) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
    })
});
main_router.get('/get_random_course', (req, res) => {
    Course.find({}, (err, data) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data[0]));
    })
});
main_router.get('/list_lessons', (req, res) => {
    Lesson.find({}, (err, data) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
    });
});


main_router.get('/lessons_for_course/:id', (req, res) => {
    Course.findById(req.params.id, (err, data) => {
        res.setHeader('Content-Type', 'application/json');
        Lesson.find({
            '_id': {$in: data.lessons}
        }, (err, docs) => res.end(JSON.stringify(docs)));
    })
});


module.exports = main_router;