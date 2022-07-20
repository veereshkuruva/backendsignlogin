const express=require("express")
const route=express.Router()
const {signUp, login} =require("../controllers/auth.controller")
const {encryptPassword} =require("../middlewares/auth.middleware");

route.post("/signup",encryptPassword,signUp)

route.post("/login",login)

module.exports={
    route
}