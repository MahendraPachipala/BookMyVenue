import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    contact:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
     }
)
const Users =mongoose.model("Users",UserSchema);
export default Users;

