const mongoose=require("mongoose")

const UserSchema= new mongoose.Schema(
    {
        name:String,
        email:String,
        password:String
    }
)

const DataSchema=new mongoose.Schema(
    {
        taskName:String,
        taskStartDate:String,
        taskEndDate:String,
        taskDescription:String
    }
)

const UserModel=mongoose.model("Users",UserSchema)
const DataModel=mongoose.model("Data",DataSchema)
module.exports={UserModel,DataModel}