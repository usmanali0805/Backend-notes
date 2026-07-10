import newuser from "../model/UserModel.js"
import redisClient from "./redis.js";

const GetUserController = async (req, res) => {

    try {

        const cachekey = 'users'
        const cachedData = await redisClient.get(cachekey);

    if (!cachedData) {
        const myUsers = await newuser.find()
        await redisClient.set(cachekey, JSON.stringify(myUsers),{ EX :3600 });
        return res.status(200).json({
                status: true,
                message: "User fetch successfully",
                data: myUsers
            })
    }else{
        const myUsers =  JSON.parse(cachedData);
       return res.status(200).json({
                status: true,
                message: "User fetch successfully",
                data: myUsers
            })
    }



        if (!myUsers) {
            return res.status(400).json({
                status: false,
                message: "User not found"
            })
        } else {
            return res.status(200).json({
                status: true,
                message: "User fetch successfully",
                data: myUsers
            })
        }
    } catch (error) {

    }
}
const AddUserController = async (req, res) => { }
const UpdateUserController = async (req, res) => {
    await redisClient.del('users')
    return res.status(200).json({
        status :true , 
        message : "User updated successfully"
    })
 }
const DeleteUserController = async (req, res) => { }

export {
    GetUserController,
    AddUserController,
    UpdateUserController,
    DeleteUserController
}
