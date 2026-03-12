import { Router } from "express";
import { deleteMenuItem,updateMenuItem,addMenuItem,getMenu,getMenuItem } from "../controllers/menuControllers.js";


const router =Router()

router.get("/menu",getMenu)
router.get("/menu/:name",getMenuItem)
router.post("/menu",addMenuItem)
router.put("/menu/:id",updateMenuItem)
router.delete("/menu/:id",deleteMenuItem)



export {router}