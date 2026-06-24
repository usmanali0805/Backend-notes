const User = require("../models/usersModels")
const jwt = require('jsonwebtoken')
const Response = require("./response")
const bcrypt = require("bcrypt")

const signupController = async (req, res) => {
    try {
        const { email, name, password } = req.body
        if (!email || !name || !password) {
            return Response(false, 400, "Please fill the required fields", req.body, res)
        }
        bcrypt.hash(req.body.password, 12, async function (err, hash) {
            req.body.password = hash
            await User.create(req.body)
            Response(true, 200, "User Signup Successfully", [], res)
        });

    } catch (error) {
        return Response(false, 400, error.message, [], res)
    }
}
const loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        const myUser = await User.findOne({
            email
        })
        if (!myUser) {
            return Response(false, 400, "User not found", [], res)
        }
        bcrypt.compare(password, myUser.password, function (err, result) {
            if (result) {

                const token = jwt.sign({
                    id: myUser._id,
                    email: myUser.email,
                    name: myUser.name
                }, process.env.JWT_SECRET, { expiresIn: 2 * 60 })
                return res.json({
                    status: true,
                    message: "User Login successfully",
                    token: token,
                    data: myUser
                })
            }
            return res.json({
                    status: false,
                    message: "Wrong credentials"
                })
        });


    } catch (error) {
        return Response(false, 400, error.message, req.body, res)

    }
}

module.exports = { signupController, loginController }