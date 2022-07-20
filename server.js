const express = require('express')
const app = require('./app')
require('dotenv').config()
const port = process.env.PORT || 5000



const dbConnect = require('./db')



// console.log(process.env.MONGO_URL);
dbConnect(process.env.MONGO).then(data => {
    app.listen(port, () => {
        console.log(`Db connected, server is running http://localhost:${port}`)
    })
    

}).catch(error => {
    console.log(error)
    console.log("Error is connected,")
})
