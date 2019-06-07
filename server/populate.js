const faker = require('faker');


const Course = require('./db').Course;
const Lesson = require('./db').Lesson;
const User = require('./db').User;
const users = [];


for (let i = 0; i < 10; i++) {
  users.push({
    name: faker.name.findName(),
    password: 'pass',
    email: faker.internet.email(),
  });
}
User.find({}, (err, user) => {
  let author_id = user[0].id;

  for (let i = 0; i < 5; i++) {
    Course.insertMany(
      {
        courseName: faker.lorem.words(),
        courseTech: faker.lorem.words(),
        courseDescription: faker.lorem.sentence(),
        lessons: [],
        author: author_id,
      },
      (err, res) => {
        console.log(err, res);
      },
    );
    for (let i = 0; i < 5; i++) {
      let new_lesson = new Lesson({
        name: faker.lorem.words(),
        language: faker.lorem.words(),
        time: '1:14',
        video: 'test',
        author: author_id,
      });
      new_lesson.save();
      Course.find({ author: author_id }, (err, courses) => {
        courses.map(course => {
          course.lessons.push(new_lesson);
          course.save();
        });
      });
    }
  }
});
process.exit();
