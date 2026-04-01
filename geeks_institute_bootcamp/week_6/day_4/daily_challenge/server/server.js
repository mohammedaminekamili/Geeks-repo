import express from "express";
import cors from "cors";


const PORT=3000

const server=express()
server.use(express.json())
server.use(cors())
server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
server.get("/api/hello",(req,res)=>{
    res.status(200).json({message:"Hello from Express"})
})
server.post("/api/hello",(req,res)=>{
    console.log(req.body)
    res.status(200).json({message:`I received your POST request. This is what you sent me: ${req.body.message}`})
})
