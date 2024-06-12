import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        default:'Customer'
    },
    mobile:{
        type:String
    },
    address:[{
        type:mongoose.Schema.Types.ObjectId, //basically another model with the name addresses will be made jisme several address will be stored jiska rfe hum yahan pe store karenge
        ref:"addresses"
    }],
    paymentInformation:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"payement_information"
        }
    ],
    ratings:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ratings"
    }],
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'reviews'
    }],
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const User = mongoose.model("users",userSchema);
export default User;