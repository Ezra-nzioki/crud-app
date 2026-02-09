const router = require('express').Router();
const app=router()

app.use(express.json())

app.post("/users",async (req, res) => {
  try {
    const{name,email,age}=req.body 
    const newUser=await User.create({name,email,age})
    res.status(201).json(newUser)
  } catch (error) {
    res.status(500).json({message:error.message})
  }
})