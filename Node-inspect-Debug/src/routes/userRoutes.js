import { Router } from "express";
import { AddUserController, DeleteUserController, GetUserController, UpdateUserController } from "../controller/userController.js";

const userRouter = Router()

userRouter.get('/',GetUserController)
userRouter.post('/',AddUserController)
userRouter.put('/', UpdateUserController)
userRouter.delete('/',DeleteUserController)

export default userRouter