import express from "express"
import connectDB from "./db.js"
import User from "./models/users.js"

const app=express()
const PORT=3000

connectDB()
const dummyData={
    name:"john",
    email:"john@example.com",
    age:30    
}

app.post("/users",async (req, res) => {
  try {
    const{name,email,age}=dummyData 
    const newUser=await User.create({name,email,age})
    res.status(201).json(newUser)
  } catch (error) {
    res.status(500).json({message:error.message})
  }
})

app.get("/users",async (req, res) => {
    try {
      const users=await User.find()
      res.status(200).json(users)
    } catch (error) {
      res.status(500).json({message:error.message})
    }
  })

app.listen(PORT,()=>console.log("port running" ))