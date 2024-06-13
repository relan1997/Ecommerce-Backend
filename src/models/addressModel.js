import mongoose from "mongoose";

const addressSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    streetAddress:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    zipcode:{
        type:Number,
        required:true
    },
    user:{ //yeh jo address hai kis user ka hai, usko define karne ke liye hum yaha ussi user ka objectId define kardete hai
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    mobile:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }

})

export default mongoose.model('addresses',addressSchema)