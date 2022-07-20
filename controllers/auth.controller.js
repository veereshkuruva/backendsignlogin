const user=require("../models/userDetails")
const {passwordCompare,jwtToken} =require("../utils/util")
const bcrypt = require('bcrypt')

const signUp=async(req,res)=>{
    
    const obj =new user({

        // var encryptPasa =await bcrypt.hash(req.body.password, 10) 

        name:req.body.name,
        email:req.body.email,
        password:req.body.password

    })
    await obj.save().then(data => {
        res.json({
            message: "Successfully registered"
        })
    }).catch(err => {

        res.json({
            message:"not registerd"
        })

    })

}
const login=async(req,res)=>{
    await user.findOne({ email: req.body.email}).then(result=>{
    

        // console.log("db passweod",result.password)
        // console.log("user passweod",req.body.password)
        //we have compare the password
        passwordCompare(result.password,req.body.password).then(data=>{

         if(data){
            //passwords match

             jwtToken({username:result.email}).then(token=>{
                res.json({
                    message:"Login suceesfully",
                    token:token
                })
             })

           
         }else{
            res.json({
                message:"password dont match"
            })
         }
        

        })

 
       

    })
}

module.exports={
    signUp,
    login
}


