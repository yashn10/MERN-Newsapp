const express = require('express');
const router = express.Router();
const con = require('../db/db');


router.post("/user", async (req, res) => {
    let success = true;
    try {
        con.query("insert into user set ?", req.body, (error, result) => {
            if (result) {
                res.status(201).json({ success, message: "data submitted successfully", result });
            } else {
                success = false;
                res.status(400).json({ success, error: "data not submitted please try again", error });
            }
        })
    } catch (error) {
        res.status(500).json({ success, error: "Server error occurs", error });
    }
})


router.post("/login", async (req, res) => {
    let success = false;
    const { email, password } = req.body;
    try {
        con.query("select * from user where email=?", email, (error, result) => {
            if (error) {
                res.status(500).json({ success, error: "Server error occured", error });
            } else if (result.length === 0 || result[0].password != password) {
                res.status(401).json({ success, message: "Invalid email or password" });
            } else {
                success = true;
                const user = result[0];
                res.status(200).json({ success, message: "User login successfully", user });
            }
        })
    } catch (error) {
        success = false;
        res.status(500).json({ success, error: "Server error occurred", error });
    }
})



module.exports = router;