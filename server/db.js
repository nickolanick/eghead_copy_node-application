// const uri = "mongodb://mongo:27017/docker-node-mongo";
const uri = "mongodb://localhost:27017/new_db;";
const mongoose = require("mongoose");
mongoose.connect(uri);
let db = mongoose.connection;







db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log("connected")
});

let userSchema = mongoose.Schema({
    name: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    icon: Number,
});
exports.User = mongoose.model("user", userSchema);


let courseSchema = mongoose.Schema({
    courseName: {type: String, required: true},
    courseTech: {type: String, required: true,},
    courseDescription: String,
    lessons: [{type: mongoose.Schema.Types.ObjectId, ref: 'Lesson'}],
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
});


exports.Course = mongoose.model("Course", courseSchema);

let lessonSchema = mongoose.Schema({
    name: {type: String, required: true},
    time: {type: String, required: true},
    video: {type: String, required: true},
    description: {type: String},
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
});


exports.Lesson = mongoose.model("Lesson", lessonSchema);


//
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