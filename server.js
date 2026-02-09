import express from "express"
import connectDB from "./db.js"

const app=express()
const PORT=3000

connectDB()

app.listen(PORT,()=>console.log("port running" ))