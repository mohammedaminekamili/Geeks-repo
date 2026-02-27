import express from "express";
import { books } from "./data.js";

const data=books
      
  
  
const app=express()
app.use(express.json())

app.get("/api/books",(req,res)=>{
    try {
        if (data.length<1) {
            return res.status(404).send("no post found")
        
        }

        res.status(200).json(data)
    } catch (error) {
        res.status(500).send("server error")
    }
})

app.get("/api/books/:id",(req,res)=>{
    try {
        const id= Number(req.params.id)
        const post=data.find(element=>element.id===id)
        if (!post) {
            return res.status(404).send("no post found")
        }
        res.status(200).json(post)
    } catch (error) {
        res.status(500).send("server error")
    }
})


app.post("/api/books",(req,res)=>{
    try {
        const {title,content}=req.body

        const post={
            id:data.length+1,
            title,
            author,
            publishedYear
        }
        data.push(post)
        res.status(201).json(post)

    } catch (error) {
        res.status(500).send("server error")
    }
})


app.listen(5000,()=>{
    try {
        
        console.log("server working")
    } catch (error) {
        console.error(error)
    }
})
