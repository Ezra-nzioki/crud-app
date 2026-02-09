import express from "express"
import connectDB from "./db.js"
import User from "./models/users.js"
import cors from "cors"
import authRouter from "./routers/auth.js"

const app=express()
const PORT=3000

app.use(cors())
app.use(express.json())

connectDB()

const dummyData=[{
    name:"john",
    email:"john@example.com",
    age:30
}]

app.post("/users",async (req, res) => {
  try {
    const { name, email, age } = req.body && Object.keys(req.body).length ? req.body : dummyData[0]
    const newUser = await User.create({ name, email, age })
    res.status(201).json(newUser)
  } catch (error) {
    res.status(500).json({message:error.message})
  }
})

// mount auth routes
app.use('/api', authRouter)

app.get("/users",async (req, res) => {
    try {
      const users=await User.find()
      res.status(200).json(users)
    } catch (error) {
      res.status(500).json({message:error.message})
    }
  })

app.listen(PORT,()=>console.log(`port running on ${PORT}`))