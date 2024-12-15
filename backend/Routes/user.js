const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");

const User = require('../Schema/User');

const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtkey = process.env.PRIVATE_KEY;

const { body, validationResult } = require("express-validator")

router.post(
    '/createuser',
    body('username', 'Username must be at least 5 characters long').isLength({ min: 5 }),
    body('email', 'Invalid email format').isEmail(),
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        const { username, email, password } = req.body;

        try {
            // Check if user already exists
            let existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(409).json({ success: false, error: 'User with this email already exists' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = await User.create({
                username,
                email,
                password: hashedPassword
            });
            const tokenData = { id: newUser._id, username: newUser.username };
            const authToken = jwt.sign(tokenData, jwtkey);

            res.status(201).json({ success: true, authToken });

        } catch (error) {
            // console.error(error.message);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }
);
router.post('/login',
    body('email').isEmail()
    , async (req, res) => {
        const error = validationResult(req);
        // console.log("body is ", req.body);

        if (!error.isEmpty()) { return res.status(500).json({ error: "invalid email " }); }
        try {

            let user = await User.findOne({ email: req.body.email });
            if (!user) {
                return res.status(404).json({ success: success, error: "No user found" })
            }
            let pass = await bcrypt.compare(req.body.password, user.password);
            if (!pass) {
                return res.status(404).json({ success: false, error: "Please enter valid password" })
            }
            const data = {
                id: user._id,
                username: user.username,
                email: user.email
            }
            const token = jwt.sign(data, jwtkey);

            res.json({ authToken: token, success: true});

        } catch (error) {
            res.status(500).json({ success: false, error: error });
        }
    })

router.put('/edit/:id',
    body('username').isLength({ min: 4 }),
    body('email').isEmail()
    , async (req, res) => {
        const { id } = req.params;
        const { username, email } = req.body;
        const error = validationResult(req);
        
        if (!error.isEmpty()) {
            return res.status(500).json({ error: "Invalid Details Entered" });
        }
        try {
            const already=await User.findOne({email});
            if(already && already._id!=id){
                return res.status(409).json({success:false,error:"Cannot use this email"});
            }

            const user = await User.findById(id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            if (username) user.username = username;
            if (email) user.email = email;
            // if (password) {
            //     user.password = await bcrypt.hash(password, 10);
            // }

            const updatedUser = await user.save();
            const data={
                id:updatedUser._id,
                username:updatedUser.username,
                email:updatedUser.email
            }
            const token=jwt.sign(data,jwtkey);
            res.status(200).json({ message: 'User updated successfully', authToken: token });

        } catch (error) {
            res.status(500).json({ message: 'Error updating user', error });
        }
    });

module.exports = router;