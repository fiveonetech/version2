import express from "express";
import mogoose from "mongoose";
import dotenv from "dotenv"

const app = express()
dotenv.config()

const connect  = async () => {
    try {
        await mogoose.connect(process.env.MONGO)
        console.log("connected to the DB")
    } catch (error) {
        throw error
    }
}

mogoose.connection.on("disconnected", () =>{
    console.log("disconnected from DB")
})
mogoose.connection.on("connected", () =>{
    console.log("connected from DB")
})

app.listen(8800, () =>{
    connect()
    console.log("connected to the backend");
})

app.get("/", (req, res)=>{
    try {        
        res.status(200).send("User has been created.")
    } catch (error) {
        throw error;
    }
} )