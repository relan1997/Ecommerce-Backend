import express from 'express'
import {register,login} from '../../controllers/authController'
const authRouter = express.Router(); // importing the router package from express

authRouter.post('/signup',register)
authRouter.post('/signin',login)

export {authRouter}
