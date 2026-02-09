import express from "express"
import connectDB from "./db.js"
import User from "./models/users.js"
import cors from "cors"
import authRouter from "./routers/auth.js"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app=express()
const PORT=process.env.PORT || 3000

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

// Serve React static files
app.use(express.static(path.join(__dirname, 'client', 'dist')))

// SPA fallback - serve index.html for non-API and non-static routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})

app.listen(PORT,()=>console.log(`port running on ${PORT}`))