const express=require("express")
const app=express();
const cors=require("cors")
const {route}=require("./routes/auth.route")

app.use(express.json());
app.use(cors());

app.use("/auth",route)
module.exports=app
    

