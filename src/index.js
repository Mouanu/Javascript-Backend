
// require('dotenv').config({path: "./env"})
// this index.js is used for DataBase Connection

// starting point of my project


import dotenv from "dotenv"
import connectDB from "./database/index.js" 
import {app} from "./app.js"

dotenv.config(
    {
        path: './.env'
    }
)


// async function will return a promise that's why we are then() and catch()
connectDB()
.then(() =>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running port : ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MongoDb connection failed !!!", err)
})















/*
import express from "express"
const app = express()

; ( async () => {

    try{
      await  mongoose.connect(`${process.env.MONGODB_URI}/
            ${DB_NAME}`)
            app.on("error",() => {
                console.log("ERROR: ",error);
                throw error
            })


            app.listen(process.env.PORT,()=>{
                console.log(`App is listening on port ${process.env.PORT}`)
            })
    }
    catch(error){
        console.error("Error: ",error)
        throw error
    }
})() 
    */