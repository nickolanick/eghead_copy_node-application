const express = require('express');
const auth_router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../db').User;

auth_router.get('/get_users', (req, res) => {
  User.find({}, (err, users) => res.status(200).send(JSON.stringify(users)));
});

auth_router.post('/registration', (req, res) => {
  if (!req.body.name || !req.body.password || !req.body.email) {
    res.status(401).send('Fields Not Provided');
  }
  User.insertMany(req.body, (err, result) => {
    err
      ? res.status(422).send(err)
      : res
          .status(200)
          .setHeader('Content-Type', 'application/json')
          .send(JSON.stringify(result));
  });
});

auth_router.post('/login', (req, res) => {
  if (!req.body.password || !req.body.email) {
    res.status(401).send('Fields Not Provided');
  }
  const user = req.body;
  User.find({ password: user.password, email: user.email }, (err, user) => {
    if (err || !user.length) {
      res.status(404).send(err);
    }
    const token = jwt.sign({ id: user[0]['_id'] }, process.env.SECRET_OR_KEY, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return res.status(200).send({ access_token: token, user: user });
  });
});

module.exports = auth_router;
