import { getUserIdFromToken } from "../../config/jwtProvider";
import {
    createUser,
    findUserByEmail,
    findUserById,
    getUserProfileByToken,
    getAllUsers,
  } from '../../services/userService'
const authenticate = async(req,res,next)=>{
    // Bearer token
    try {
        const token=req.headers.authorization?.split(' ')[1]; // req.headers mai tumhara jwt token stored hota hai
        if(!token){
            return res.status(404).send({error:'token not found'})
        }
        const userId = getUserIdFromToken(token);
        const user = findUserById(userId)
        req.user=user; // the middleware that sets the req.user property(if the user exists) and this user property is later used in the different services
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
    next(); // allows to execute the next function
}
export {authenticate}