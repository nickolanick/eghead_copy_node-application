const express = require("express");
const main_router = express.Router();


const Course = require("../db").Course;
const Lesson = require("../db").Lesson;
//     next();
main_router.get('/list_courses', (req, res) => {
    Course.find({}, (err, data) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
    })
});
main_router.get('/get_random_course', (req, res) => {
    console.log("random course")
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
    Course.find({id: req.params.id}, (err, data) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data.lessons));
    })
});


main_router.get("/user", (req, res) => {

});
module.exports = main_router;