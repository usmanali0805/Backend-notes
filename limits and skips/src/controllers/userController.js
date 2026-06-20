const User = require("../models/usersModels")
const Response = require("./response")

console.log('yahan bhi aya')
const getUserController = async (req, res) => {
    let query = {}
    let limit = req.query.limit ?? 10
    try {
        if (req.query.ageStart && req.query.ageEnd) {
            const queryFlage = { ...req.query }
            delete queryFlage.ageStart
            delete queryFlage.ageEnd
            query = { ...queryFlage ,age: { $gte: req.query.ageStart, $lte: req.query.ageEnd } }

        }

        const users = await User.find().limit(limit)
        Response(true, 200, "Users Fetch successfully", users, res)


    } catch (error) {
        Response(false, 400, error.message, [], res)
        console.log(error.message)

    }
}
const addUserController = async (req, res) => { }
const UpdateUserController = async (req, res) => { }
const deleteUserController = async (req, res) => { }

module.exports = { addUserController, getUserController, UpdateUserController, deleteUserController }