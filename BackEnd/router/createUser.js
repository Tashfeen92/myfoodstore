const express = require('express')
const router = express.Router()
const User = require('../model/userSchema')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken');
const jwtSecret = "HaHa"
// const axios = require('axios')
// const fetch = require('../middleware/fetchDetails');
// const Order = require('../model/orderSchema')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router.post('/createuser', [
    body('firstName').isLength({ min: 3 }),
    body('lastName').isLength({ min: 3 }),
    body('email').isEmail(),
    body('phone').isLength({ min: 11 }),
    body('password', 'Incorrect Password').isLength({ min: 7 })
], async (req, res) => {

    let success = false
    const errors = validationResult(req.body);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() })
    }

    // let user = await User.findOne({ email: req.body.email })

    const salt = await bcrypt.genSalt(10)
    let securePass = await bcrypt.hash(req.body.password, salt);

    try {
        await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            password: securePass,
        })
        res.json({ success: true })
    } catch (error) {
        console.error(error.message);
        res.json({ success: false })
    }
})

router.post('/login', [
    body('email', "Enter a Valid Email").isEmail(),
    body('password', "Password cannot be blank").exists(),
], async (req, res) => {
    let success = false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });  //{email:email} === {email}
        if (!user) {
            return res.status(400).json({ success, error: "Try Logging in with correct credentials" });
        }
        const pwdCompare = await bcrypt.compare(password, user.password); // this return true false.
        if (!pwdCompare) {
            return res.status(400).json({ success, error: "Try Logging in with correct credentials" });
        }
        const data = {
            user: {
                id: user.id
            }
        }
        success = true;
        const authToken = jwt.sign(data, jwtSecret);
        res.json({ success, authToken })


    } catch (error) {
        console.error(error.message)
        res.send("Server Error")
    }
})

module.exports = router
