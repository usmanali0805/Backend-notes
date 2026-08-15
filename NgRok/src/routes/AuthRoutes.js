import { Router } from "express";
import { LoginFunc, SignupFunc } from "../controller/AuthController.js";

const AuthRoutes = Router()

AuthRoutes.post('/login', LoginFunc)
AuthRoutes.post('/signup', SignupFunc)

export default AuthRoutes;