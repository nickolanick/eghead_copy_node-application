const express = require("express");
const auth_router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../db").User;


auth_router.get('/get_users', (req, res) => {
    User.find({}, (err, users) => res.status(200).send(JSON.stringify(users)))
});

auth_router.post('/registration', (req, res) => {
    if (!req.body.password || !req.body.email) {
        res.status(401).send("Fields Not Provided")
    }
    const user = req.body;
    User.insertMany(user, (err, result) => {
        let data = err ? {"error": err, status: 422} : {user: result, status: 200};
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
    })
});


auth_router.post('/login', (req, res) => {
    if (!req.body.password || !req.body.email) {
        res.status(401).send("Fields Not Provided")
    }
    const user = req.body;
    User.find({password: user.password, email: user.email}, (err, user) => {
            const token = jwt.sign({id: user[0]['_id'],}, process.env.SECRET_OR_KEY, {expiresIn: process.env.TOKEN_EXPIRATION});
            return res.status(200).send({"access_token": token, "user": user})
        }
    )
});


module.exports = auth_router;