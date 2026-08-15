import User from "../modules/Usermodel.js"
import jwt from "jsonwebtoken"

const LoginFunc = (req, res) => {

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
        const dbUser = await User.findOne({ email })
        if (!dbUser) {
            const token = jwt.sign({email, username}, process.env.JWT_SECRET_KEY);
            console.log(token)

            const newUser = User.create(req.body)
            return res.json(newUser)
        } else {
            return res.status(400).json({
                status: false,
                msg: "Please use different email fields"

            })
        }
    } catch (error) {
        res.status(400).json(error.message)
    }
}
export { LoginFunc, SignupFunc }