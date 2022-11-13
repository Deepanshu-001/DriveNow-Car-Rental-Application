const mongoose = require("mongoose");

function connectDB(){

   mongoose.connect('mongodb+srv://deepanshu:Hz22gc1YHBduJZko@cluster0.xd8bvey.mongodb.net/sheyCars',{useUnifiedTopology :true,useNewUrlParser:true});

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose