// const uri = "mongodb://mongo:27017/docker-node-mongo";
const faker = require('faker');

// var randomName = faker.name.findName(); // Rowan Nikolaus


const Course = require("./db").Course;
const Lesson = require("./db").Lesson;
const User = require("./db").User;

const users = [];
for (let i = 0; i < 10; i++) {
    users.push(
        {
            name: faker.name.findName(),
            password: "pass",
            email: faker.internet.email()
        })
}
console.log(users);
// // User.insertMany({
// //     name:"nick",
// //     password:"pass",
// //     email:"kek"
// //
// // },(err,res)=>console.log(res));
User.find({}, (err, user) => {
    let author_id = user[0].id;


    for (let i = 0; i < 5; i++) {
        Course.insertMany({
            courseName: faker.lorem.words(),
            courseTech: faker.lorem.words(),
            courseDescription: faker.lorem.sentence(),
            lessons: [],
            author: author_id,
        }, (err, res) => {
            console.log(err, res)
        });


        for (let i = 0; i < 5; i++) {
            let new_lesson = new Lesson({
                name: faker.lorem.words(),
                time: "12:0",
                video: "test",
                author: author_id,
            });
            new_lesson.save();


            Course.find({author: author_id}, (err, courses) => {
                courses.map(course => {
                    course.lessons.push(
                        new_lesson
                    );
                    course.save()
                })
            })
        }

    }
})


//
// Course.find({},(err,data)=>console.log(data));
// Lesson.find({},(err,data)=>console.log(data));
//
// // exports.Course.find({},(err,users)=>{
// //     users.map(course=>{
// //         console.log(course.toString())
// //     })
// // });
//
// // exports.User.insertMany({
// //
// //     name:"test"
// // }, (err, res) => {
// //     console.log(err, res)
// // })
//
// // exports.Course.insertMany({
// //
// //     courseName: "ract",
// //     courseTech: "react",
// //     courseAuthor: 4,
// //     courseDescription: "testing",
// //     author: "5cf3c54d3ab0c440e1d48a68"
// // }, (err, res) => {
// //     console.log(err, res)
// // })