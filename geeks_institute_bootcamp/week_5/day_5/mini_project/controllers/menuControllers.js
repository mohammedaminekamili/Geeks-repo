import { getAllItems,getItemByName,updateItem,createItem,deleteItem } from "../models/menuModel.js";


const getMenu= async (req,res)=>{
    try {
        const result= await getAllItems()
        res.status(200).json(result)
        console.log(result)
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
}

const getMenuItem = async (req,res)=>{
    try {
        const name=req.params.name
        const result= await getItemByName(name)
        res.status(200).json(result)
        console.log(result)
    } catch (e) {
        console.log(e)
        res.status(500).send(e) 
    }
}

const addMenuItem=async (req,res)=>{
    try {
        const{name,price}=req.body
        await createItem(name,price)
        res.status(201).send("user created successfuly")

    } catch (error) {
        console.log(error)
        res.status(500).send(error) 
    }
}

const updateMenuItem=async(req,res)=>{
    try {
        const{name,price}=req.body
        const id=req.params.id
        await updateItem(id,name,price)
        res.status(201).send("user updated successfuly")

    } catch (error) {
        console.log(error)
        res.status(500).send(error) 
    }
}


const deleteMenuItem=async (req,res)=>{
    try {
        const id=req.params.id
        await deleteItem(id)
        res.status(201).send("user deleted successfuly")

    } catch (error) {
        console.log(error)
        res.status(500).send(error) 
    }
}

export{getMenu,getMenuItem,addMenuItem,updateMenuItem,deleteMenuItem}

