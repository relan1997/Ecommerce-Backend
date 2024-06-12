import mongoose from "mongoose"
const mongoDbUrl="mongodb+srv://hrelan1997:53D0dDiUypwsAqzO@cluster0.9ehho5c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDb=()=>{
    return mongoose.connect(mongoDbUrl);
}
export default connectDb;