 import {getUserProfile,getAllUser} from '../../controllers/userController'
import express from 'express';
//import { getAllUsers } from '../../services/userService';
const userRouter = express.Router()

userRouter.get('/profile',getUserProfile);
userRouter.get('/',getAllUser)

export {userRouter};