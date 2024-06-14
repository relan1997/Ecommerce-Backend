import jwt from 'jsonwebtoken'

const SECRET_KEY='biebfuwazhrfbeslsvbeslkrbvhtsbr'; 

const generateToken =(userId)=>{
    const token = jwt.sign({userId},SECRET_KEY,{expiresIn:'48h'})
    return token
}

const getUserIdFromToken=(token)=>{ // getting out the userId from the token that we recieved from the request
    const decodedToken=jwt.verify(token,SECRET_KEY) //checks if the token is valid or not
    return decodedToken.userId
} 

export {generateToken,getUserIdFromToken}