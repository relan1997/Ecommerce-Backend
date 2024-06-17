import {createUser,
    findUserByEmail,
    findUserById,
    getUserProfileByToken,
    getAllUsers,} from '../services/userService'
const getUserProfile = async(req,res)=>{
    try {// for understanding the above code pls visit https://chatgpt.com/c/bd3e57ad-c789-491b-b53c-230a4a96f970
        const jwt = req.headers.authorization?.split(" ")[1];
        //This line attempts to extract a JSON Web Token (JWT) from the request headers.
        if(!jwt){
            return res.status(404).send({error:"token not found"})
            //req.headers.authorization accesses the Authorization header from the incoming HTTP request.
            //The ?. (optional chaining) operator ensures that if authorization is undefined, the code will not throw an error and will instead return undefined.
        }
        //agar token mil gya toh actual user find karunga
        const user = await getUserProfileByToken(jwt)
        return res.status(200).send(user)
    } catch (err) {
        return res.status(500).send({error:err.message})
    }
}

const getAllUser = async(req,res)=>{
    try {
        const users=await getAllUsers();
        return res.status(200).send(users)
    } catch (err) {
        return res.status(500).send({error:err.message})
    }
}
export {getUserProfile,getAllUser}