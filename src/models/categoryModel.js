import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:50
    },
    parentCategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'categories'
    },
    level:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
});

const Category = mongoose.model('categories',categorySchema);
export default Category