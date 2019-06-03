// const uri = "mongodb://mongo:27017/docker-node-mongo";

const Course = require("./db").Course;
const Lesson = require("./db").Lesson;
const User = require("./db").User;

// User.insertMany({
//     name:"nick",
//     password:"pass",
//     email:"kek"
//
// },(err,res)=>console.log(res));
User.find({}, (err, user) => {
    let author_id = user[0].id;
    let new_lesson = new Lesson({
        name: "test",
        time: "test",
        video: "test",
        author: author_id,
    });
    new_lesson.save();
    // // Lesson.insertMany(new_lesson, (err, res) => {
    // //     console.log(err, res)
    // // });

    // Course.insertMany({
        // courseName: " test",
        // courseTech: " test",
        // courseDescription: " test",
    //     lessons: [],
    //     author: author_id,
    // }, (err, res) => {
    //     console.log(err, res)
    // });
    //
    Course.find({author:author_id},(err,courses)=>{
        courses.map(course=>{course.lessons.push(
            new_lesson
        );course.save()})
    })

});

Course.find({},(err,data)=>console.log(data));
Lesson.find({},(err,data)=>console.log(data));

// exports.Course.find({},(err,users)=>{
//     users.map(course=>{
//         console.log(course.toString())
//     })
// });

// exports.User.insertMany({
//
//     name:"test"
// }, (err, res) => {
//     console.log(err, res)
// })

// exports.Course.insertMany({
//
//     courseName: "ract",
//     courseTech: "react",
//     courseAuthor: 4,
//     courseDescription: "testing",
//     author: "5cf3c54d3ab0c440e1d48a68"
// }, (err, res) => {
//     console.log(err, res)
// })