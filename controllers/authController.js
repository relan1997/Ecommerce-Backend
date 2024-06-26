import bcrypt from 'bcryptjs'
import {
  createUser,
  findUserByEmail,
  findUserById,
  getUserProfileByToken,
  getAllUsers,
} from "../services/userService.js";

import {generateToken,getUserIdFromToken} from '../config/jwtProvider.js'
import { createCart } from '../services/cartService.js';

const register = async (req, res) => {
    try{
        const user = await createUser(req.body);
        const jwt = generateToken(user._id);

        await createCart(user);

        return res.status(200).send({jwt,message:'resgiter success'})
    }
    catch(err)
    {
        return res.status(500).send({error:err.message})
    }
};

const login= async(req,res)=>{
    const {email,password} = req.body;
    try {
        const user=await findUserByEmail(email)
        if(!user)
             res.status(404).send({message:"user doesn't exist with ",email});
        const isPasswordValid=await bcrypt.compare(password,user.password) //the password is the one we have got from the req.body and the user.passwod is the hashed password that already exists in the user.password

        if(!isPasswordValid)
             res.status(401).send({message:'Invalid Password...'})

        const jwt=generateToken(user._id);
        return res.status(200).send({jwt,message:'Login Success'});
        
    } catch (err) {
        return res.status(500).send({error:err.message}) 
    }
}

export {register,login}