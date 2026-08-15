import User from "../modules/Usermodel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const SignupFunc = async (req, res) => {
    try {
        const { email, username, password } = req.body
        if (!email || !username || !password) {
            return res.status(400).json({
                status: false,
                msg: "Please fill all required fields"
            })
        }
        const hash = await bcrypt.hash(password, 12);
        req.body.password = hash
        await User.create(req.body)
        return res.status(200).json({
            status: true,
            message: "User Signup successfully ",
            data: req.body
        })

    } catch (error) {
        return res.status(400).json(error.message)
    }
}

const LoginFunc = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                status: false,
                message: "Please fill all required fields"
            })
        }
        const user = await User.findOne({ email })
        const { username } = user
        if (!user) {
            return res.status(400).json({
                status: false,
                message: "User Not found"
            })
        }
        await bcrypt.compare(password, user.password, async function (err, result) {
            if (result) {
                const token = jwt.sign({ email, username }, process.env.JWT_SECRET_KEY);
                return res.status(200).json({
                    status: true,
                    message: "User Login Successfully",
                    data: user,
                    token: token
                })
            }
            return res.status(400).json({
                status: false,
                message: "Invalid Credentails "
            });
        })
    } catch (error) {
        return res.status(400).json({
            status: false,
            message: error.message
        })

    }
}

export { LoginFunc, SignupFunc }