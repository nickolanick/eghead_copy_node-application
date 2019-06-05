const express = require("express");
const auth_router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../db").User;


auth_router.get('/get_users', (req, res) => {
    User.find({}, (err, users) => {
            return res
                .status(200)
                .send(JSON.stringify(users))
        }
    )
});

auth_router.post('/registration', (req, res) => {
    const user = req.body;
    User.insertMany(
        user,
        (err, result) => {
            let data = err ? {"error": err, status: 422} : {user: result, status: 200};
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
        })
});


auth_router.post('/login', (req, res) => {
    const user = req.body;
    User.find({password: user.password, email: user.email}, (err, user) => {
            if (!user.length || err)
                return res.send(err);
            const token = jwt.sign({
                username: user.name,
            }, process.env.JWT_KEY, {expiresIn: "3 hours"});
            return res
                .status(200)
                .send({"access_token": token})
        }
    )
});


module.exports = auth_router;