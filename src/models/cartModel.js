import mongoose, { mongo } from "mongoose";

const cartSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    cartItems:[{ // will be an array of objects isliye [{}] la istemaal hua hai
        type:mongoose.Schema.Types.ObjectId,
        ref:"cartItems",
        required:true
    }],
    totalPrice:{
        type:Number,
        required:true,
        default:0
    },
    totalItem:{
        type:Number,
        required:true,
        default:0
    },
    totalDiscountedPrice:{
        type:Number,
        required:true,
        default:0
    },
    discount:{
        type:Number,
        required:true,
        default:0
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
});

const Cart = mongoose.model('cart',cartSchema);

export default Cart
