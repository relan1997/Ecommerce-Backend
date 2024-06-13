import mongoose, { mongo } from "mongoose";

const cartItemSchema = new mongoose.Schema({
    cart:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'cart',
        required:true
    },
    product:{
        type:mongoose.Schema.Types,ObjectId,
        ref:'products',
        required:true
    },
    size:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        default:1,
    },
    price:{
        type:Number,
        required:true
    },
    discountedPrice:{
        type:Number,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
});

const CartItem = mongoose.model('cartItems',cartItemsSchema);

export default CartItem