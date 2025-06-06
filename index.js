const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const {UserModel,DataModel}=require("./Schema")

const app=express();
app.use(cors());

app.use(express.json());
mongoose.connect("mongodb://localhost:27017/vibish");

app.get("/users", async (req,res)=>{
        try{
            const userData= await UserModel.find();
            return res.json(userData);
        }
        catch(err)
        {
            console.log(err);
        }
})
app.get("/tasks", async (req,res)=>{
        try{
            const taskData= await DataModel.find();
            return res.json(taskData);
        }
        catch(err)
        {
            console.log(err);
        }
})



app.post("/data",(req,res)=>{
    DataModel.create(req.body).then(res.json("success")).catch((err)=>{
        console.log(err);
    });
})

app.delete("/data/:id", async (req,res)=>{
    const id=req.params.id;
    const deleted= await DataModel.findByIdAndDelete(id);
   return res.json(deleted);
})

app.post("/register",(req,res)=>{
    UserModel.create(req.body).then(res.json("success")).catch((err)=>{
        console.log(err);
    });
})

app.post("/login",(req,res)=>{
    const{email,password}=req.body;
    UserModel.findOne({email:email}).
    then((user)=>{
        if(user)
        {
            if(user.password===password){
               return res.json("success")
            }
            else{
              return  res.json("incorrect password")
            }
        }
        res.json("no such user exist")
    })
})

app.listen(8000,()=>{
    console.log("App is listening on port 8000...");
})

