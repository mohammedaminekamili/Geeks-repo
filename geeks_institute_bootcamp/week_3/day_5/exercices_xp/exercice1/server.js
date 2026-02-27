import express from "express";
import { posts } from "./data.js";

const data=posts
      
  
  
const app=express()
app.use(express.json())

app.get("/posts",(req,res)=>{
    try {
        if (data.length<1) {
            return res.status(404).send("no post found")
        
        }

        res.status(200).json(data)
    } catch (error) {
        res.status(500).send("server error")
    }
})

app.get("/posts/:id",(req,res)=>{
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


app.post("/posts",(req,res)=>{
    try {
        const {title,content}=req.body
        if (!title || !content) {
            return res.status(400).send("fill all required fields")
        }
        const post={
            id:data.length+1,
            title,
            content
        }
        data.push(post)
        res.status(201).json(post)

    } catch (error) {
        res.status(500).send("server error")
    }
})

app.put("/posts/:id",(req,res)=>{
    try {
        const id= Number(req.params.id)
        const index=data.findIndex(element=>element.id===id)
        if (index==-1) {
            return res.status(404).send("no post found")
        }
        const {title,content}=req.body
        data[index].content=content
        data[index].title=title
        res.status(200).json(data[index])


    } catch (error) {
        res.status(500).send("server error")
    }
})

app.delete("/posts/:id",(req,res)=>{
    try {
        const id= Number(req.params.id)
        const index=data.findIndex(element=>element.id===id)
        if (index==-1) {
            return res.status(404).send("no post found")
        }
       data.splice(index,1)
        res.status(200).json(data)


    } catch (error) {
        res.status(500).send("server error")
    }
})

app.listen(3000,()=>{
    try {
        
        console.log("server working")
    } catch (error) {
        console.error(error)
    }
})
