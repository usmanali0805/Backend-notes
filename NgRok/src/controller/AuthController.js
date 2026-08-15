import User from "../modules/Usermodel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const LoginFunc = (req, res) => {
    const token = jwt.sign({ email, username }, process.env.JWT_SECRET_KEY);
    console.log(token)

}
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
export { LoginFunc, SignupFunc }