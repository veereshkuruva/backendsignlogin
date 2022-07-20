const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const key ="vignesh"
const passwordCompare = async (dbPassword, enteredPassword) => {
    try {
        return await bcrypt.compare(enteredPassword,dbPassword);

    } catch (error) {
        return false;
    }
}


//token generate
const jwtToken=async(userdata)=>{
    try{
        const token = await jwt.sign(userdata, key);

        return token

    }catch(error){
        return false;
    }
}

module.exports={
    passwordCompare,
    jwtToken
}