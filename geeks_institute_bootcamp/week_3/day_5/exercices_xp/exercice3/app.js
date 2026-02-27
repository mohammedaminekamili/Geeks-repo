import express from "express";
import { fetchPost } from "./data/dataService.js";

const app= express()

express.json()

app.get("/posts",async (req,res)=>{
    const data= await fetchPost()
    res.status(200).json(data)
    console.log("data sent correctly")
})
app.listen(5000, ()=>{
    console.log("server working")
})