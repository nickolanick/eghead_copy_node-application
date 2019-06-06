const express = require("express");
const auth_router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../db").User;

auth_router.get("/get_users", async (req, res) => {
    try {
        let users = await User.find().exec();
        res.send(users);
    } catch (e) {
        res.status(500).send(e)
    }
});

auth_router.post("/registration", async (req, res) => {
    try {
        let user = new User(req.body);
        let result = await user.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

auth_router.post("/login", async (req, res) => {
    const {password, email} = req.body;
    if (!password || !email) res.status(401).send("Fields Not Provided");
    try {
        let user = await User.findOne({password, email}).exec();
        const access_token = jwt.sign(
            {id: user["_id"]},
            process.env.SECRET_OR_KEY,
            {expiresIn: process.env.TOKEN_EXPIRATION}
        );
        return res.status(200).send({access_token, user});
    } catch (e) {
        console.log(e);
        res.status(500).send(e)
    }
});

module.exports = auth_router;
